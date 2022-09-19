package com.codestates.main31.product.controller;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.entity.ProductState;
import com.codestates.main31.product.mapper.ProductMapper;
import com.codestates.main31.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    private final ProductMapper productMapper;

    @PostMapping
    public ResponseEntity<ProductResponseDto.GetDetail> createProduct(@RequestBody ProductRequestDto.Post postDto) {
        Product savedProduct = productService.createProduct(productMapper.productRequestPostDtoToProduct(postDto));
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(savedProduct), HttpStatus.CREATED);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<ProductResponseDto.GetDetail> readProduct(@PathVariable Long productId) {
        Product readProduct = productService.readProduct(productId);
        return new ResponseEntity<>(productMapper.productToProductResponseGetDetailDto(readProduct), HttpStatus.OK);
    }

    @GetMapping
    public MultiResponseDto<ProductResponseDto.GetList> readProductsList(@RequestParam int page) {
        Page<Product> readProductsList = productService.readProductsList(page);
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
