package com.codestates.main31.productimage.mapper;

import com.codestates.main31.productimage.entity.ProductImage;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductImageMapper {

//    ProductImageResponseDto productImageToProductImageResponseDto(ProductImage productImage);
//
    List<String> productImageListToProductImageResponseDtoList(List<ProductImage> productImageList);

    default String productImageResponseDtoTosavePathString(ProductImage productImage){
        return productImage.getSavedPath();
    }
}
