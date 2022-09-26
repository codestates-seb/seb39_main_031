package com.codestates.main31.product.mapper;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productRequestPostDtoToProduct(ProductRequestDto.Post postDto);

    Product productRequestPatchDtoToProduct(ProductRequestDto.Patch patchDto);

    ProductResponseDto.GetDetail productToProductResponseGetDetailDto(Product product);

    ProductResponseDto.GetList productToProductResponseGetListDto(Product product);

    List<ProductResponseDto.GetList> productListToProductResponseGetListsDto(List<Product> productList);

    default MultiResponseDto<ProductResponseDto.GetList> productResponseGetListsDtoToMultiResponseDto(Page<Product> productPage) {
        List<ProductResponseDto.GetList> getDatas = productListToProductResponseGetListsDto(productPage.getContent());
        return new MultiResponseDto<>(getDatas, productPage);
    }
}
