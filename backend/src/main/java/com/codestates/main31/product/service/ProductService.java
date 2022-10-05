package com.codestates.main31.product.service;

import com.codestates.main31.address.Address;
import com.codestates.main31.address.AddressRepository;
import com.codestates.main31.category.entity.Category;
import com.codestates.main31.category.repository.CategoryRepository;
import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.productimage.entity.ProductImage;
import com.codestates.main31.productimage.handler.ImageHandler;
import com.codestates.main31.productimage.handler.S3Handler;
import lombok.RequiredArgsConstructor;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ProductService {

    private final ProductRepository productRepository;

    private final CategoryRepository categoryRepository;

    private final AddressRepository addressRepository;

    private final ImageHandler imageHandler;

    private final S3Handler s3Handler;

    public Product createProduct(Product product, List<MultipartFile> file) throws IOException {
        product.setCategory(findCategory(product.getCategory().getCategory()));
        product.setAddress(findAddress(product));

        Product parseProduct = parseContextAndSaveImage(product);
        Product savedProduct = productRepository.save(parseProduct);
        List<ProductImage> productImageList = imageHandler.parseImage(file);

        return savedProduct.addProductImage(productImageList);
    }

    @Transactional(readOnly = true)
    public Product readProduct(Long productId) {
        return findProduct(productId);
    }

    @Transactional(readOnly = true)
    public Page<Product> readProductsList(int page, int size, Specification<Product> spec) {
        return productRepository.findAll(spec, PageRequest.of(page-1, size, Sort.Direction.DESC, "productId"));
    }

    // Todo: 작성자를 제외한 인원은 수정 불가능
    public Product updateProduct(Long productId, Product newProduct) {
        Product curProduct = findProduct(productId);

        Optional.ofNullable(newProduct.getTitle())
                .ifPresent(title -> curProduct.setTitle(title));
        Optional.ofNullable(newProduct.getBody())
                .ifPresent(body -> curProduct.setBody(body));
        Optional.ofNullable(newProduct.getEndedTime())
                .ifPresent(endedTime -> curProduct.setEndedTime(endedTime));
        Optional.ofNullable(newProduct.getGoalQuantity())
                .ifPresent(goalQuantity -> curProduct.setGoalQuantity(goalQuantity));
        Optional.ofNullable(newProduct.getUnitPerPrice())
                .ifPresent(unitPerPrice -> curProduct.setUnitPerPrice(unitPerPrice));
        Optional.ofNullable(newProduct.getUnit())
                .ifPresent(unit -> curProduct.setUnit(unit));
        Optional.ofNullable(newProduct.getState())
                .ifPresent(state -> curProduct.setState(state));

        return curProduct;
    }

    // Todo: 작성자를 제외한 인원은 삭제 불가능
    public void deleteProduct(Long productId) {
        findProduct(productId);
        productRepository.deleteById(productId);
    }

    public Product findProduct(Long productId) {
        return productRepository.findById(productId).orElseThrow(()-> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
    }

    private Product parseContextAndSaveImage(Product product) {
        Document doc = Jsoup.parse(product.getBody());
        String body = product.getBody();
        Elements images = doc.getElementsByTag("img");

        if(images.size() > 0) {
            for (Element image : images) {
                String source = image.attr("src");

                source = source.replace(s3Handler.getUrl(), "");
                String newSource = s3Handler.getRealPath() + source.split("/")[1];

                body = body.replace(source, newSource);

                s3Handler.updateImage(source, newSource);
            }
        }

        product.setBody(body);
        return product;
    }

    private Category findCategory(String category) {
        return categoryRepository.findByCategory(category).orElseThrow(() -> new BusinessLogicException(ExceptionCode.CATEGORY_NOT_FOUND));
    }

    private Address findAddress(Product product) {
        return addressRepository.findByRegionAndTown(product.getAddress().getRegion().toString(), product.getAddress().getTown()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ADDRESS_NOT_FOUND));
    }

}
