package com.codestates.main31.productimage.mapper;

import com.codestates.main31.productimage.entity.ProductImage;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductImageMapper {

//    ProductImageResponseDto productImageToProductImageResponseDto(ProductImage productImage);
//
    List<String> productImageListToProductImageResponseDtoList(List<ProductImage> productImageList);

    default String productImageResponseDtoTosavePathString(ProductImage productImage){
        return productImage.getSavedPath();
    }
    @Mapping(source = "savedPath", target = "savedPath")
    ProductImage savedPathStringToProductImage(String savedPath);

}
