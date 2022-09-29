package com.codestates.main31.product.service;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.productimage.entity.ProductImage;
import com.codestates.main31.productimage.handler.ImageHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
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

    private final ImageHandler imageHandler;

    public Product createProduct(Product product, List<MultipartFile> file) throws IOException {
        Product savedProduct = productRepository.save(product);
        List<ProductImage> productImageList = imageHandler.parseImage(file);

        return savedProduct.addProductImage(productImageList);
    }

    @Transactional(readOnly = true)
    public Product readProduct(Long productId) {
        return findProduct(productId);
    }

    @Transactional(readOnly = true)
    public Page<Product> readProductsList(int page, int size, Specification<Product> spec) {
        return productRepository.findAll(spec, PageRequest.of(page-1, size));
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

}
