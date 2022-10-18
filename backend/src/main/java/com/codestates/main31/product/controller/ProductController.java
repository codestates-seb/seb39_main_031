package com.codestates.main31.product.controller;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.entity.ProductState;
import com.codestates.main31.product.mapper.ProductMapper;
import com.codestates.main31.product.repository.ProductSpecification;
import com.codestates.main31.product.service.ProductService;
import com.codestates.main31.productimage.mapper.ProductImageMapper;
import com.codestates.main31.productimage.mapper.ProductImageMapperImpl;
import com.codestates.main31.user.auth.filter.entity.PrincipalDetails;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    private final ProductMapper productMapper;

    private final ProductImageMapper productImageMapper;

    @PostMapping
    public ResponseEntity<ProductResponseDto.GetDetail> createProduct(
            @AuthenticationPrincipal PrincipalDetails principalDetails,
            @RequestBody ProductRequestDto.Post postDto) throws IOException {
        com.codestates.main31.user.entity.User user = principalDetails.getUser();
        Product savedProduct = productService.createProduct(productMapper.productRequestPostDtoToProduct(postDto), productImageMapper.savedPathStringToProductImage(postDto.getProductImage()), user);
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(savedProduct), HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponseDto.GetDetail> readProduct(@PathVariable Long productId) {
        Product readProduct = productService.readProduct(productId);
        ProductResponseDto.GetDetail getDetail = productMapper.productToProductResponseGetDetailDto(readProduct);
        getDetail.getEnteredUser().forEach(enteredUser -> enteredUser.setTotalPrice(enteredUser.getAmount() * getDetail.getUnitPerPrice()));
        return new ResponseEntity<>(getDetail, HttpStatus.OK);
    }

    @GetMapping("/deadline")
    public MultiResponseDto<ProductResponseDto.GetList> readProductsListWithinDeadline(@RequestParam int page,
                                                                         @RequestParam(defaultValue = "9", required = false) int size) {

        Specification<Product> spec = (root, query, builder) -> builder.greaterThan(root.get("endedTime"), LocalDateTime.now());
        spec = spec.and((root, query, builder) -> builder.equal(root.get("state"), ProductState.PROCEED));
        Page<Product> readProductsList = productService.readProductsListWithinDeadline(page, size, spec);
        return productMapper.productResponseGetListsDtoToMultiResponseDto(readProductsList);
    }

    @GetMapping
    public MultiResponseDto<ProductResponseDto.GetList> readProductsList(@RequestParam int page,
                                                                         @RequestParam(defaultValue = "9", required = false) int size,
                                                                         @ModelAttribute ProductSpecification.ProductCriteria criteria) {
        Specification<Product> spec = (root, query, builder) -> null;

        if (criteria.getCategory() != null)
            spec = spec.and((root, query, builder) -> builder.equal(root.join("category").get("category"), criteria.getCategory()));
        if (criteria.getRegion() != null)
            spec = spec.and((root, query, builder) -> builder.equal(root.join("address").get("region"), criteria.getRegion()));
        if (criteria.getTown() != null)
            spec = spec.and((root, query, builder) -> builder.equal(root.join("address").get("town"), criteria.getTown()));

        spec = spec.and((root, query, builder) -> builder.equal(root.get("state"), ProductState.PROCEED));
        Page<Product> readProductsList = productService.readProductsList(page, size, spec);
        return productMapper.productResponseGetListsDtoToMultiResponseDto(readProductsList);
    }

    @PatchMapping("/{productId}")
    public ResponseEntity<ProductResponseDto.GetDetail> updateProduct(@PathVariable Long productId,
                                                                      @RequestBody ProductRequestDto.Patch patch) {
        Product newProduct = productMapper.productRequestPatchDtoToProduct(patch);
        Product changedProduct = productService.updateProduct(productId, newProduct);
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(changedProduct), HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
