package com.codestates.main31.product.controller;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.mapper.ProductMapper;
import com.codestates.main31.product.repository.ProductSpecification;
import com.codestates.main31.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    private final ProductMapper productMapper;

    @PostMapping
    public ResponseEntity<ProductResponseDto.GetDetail> createProduct(
            @RequestPart ProductRequestDto.Post postDto,
            @RequestPart("file") List<MultipartFile> file) throws IOException {
        Product savedProduct = productService.createProduct(productMapper.productRequestPostDtoToProduct(postDto), file);
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(savedProduct), HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponseDto.GetDetail> readProduct(@PathVariable Long productId) {
        Product readProduct = productService.readProduct(productId);
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(readProduct), HttpStatus.OK);
    }

    @GetMapping
    public MultiResponseDto<ProductResponseDto.GetList> readProductsList(@RequestParam int page,
                                                                         @RequestParam(defaultValue = "9", required = false) int size,
                                                                         @ModelAttribute ProductSpecification.ProductCriteria criteria) {
        Specification<Product> spec = (root, query, builder) -> null;

        if (criteria.getCategory() != null) spec = spec.and((root, query, builder) -> builder.equal(root.join("category").get("category"), criteria.getCategory()));
        if (criteria.getRegion() != null) spec = spec.and((root, query, builder) -> builder.equal(root.join("address").get("region"), criteria.getRegion()));
        if (criteria.getTown() != null) spec = spec.and((root, query, builder) -> builder.equal(root.join("address").get("town"), criteria.getTown()));

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
