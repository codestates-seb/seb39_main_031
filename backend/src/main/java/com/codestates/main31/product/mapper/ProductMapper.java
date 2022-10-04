package com.codestates.main31.product.mapper;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    @Mapping(source = "region", target = "address.region")
    @Mapping(source = "town", target = "address.town")
    @Mapping(source = "category", target = "category.category")
    Product productRequestPostDtoToProduct(ProductRequestDto.Post postDto);

    Product productRequestPatchDtoToProduct(ProductRequestDto.Patch patchDto);

    @Mapping(target = "category", source = "category.category")
    @Mapping(target = "region", source = "address.region")
    @Mapping(target = "town", source = "address.town")
    ProductResponseDto.GetDetail productToProductResponseGetDetailDto(Product product);

    ProductResponseDto.GetList productToProductResponseGetListDto(Product product);

    List<ProductResponseDto.GetList> productListToProductResponseGetListsDto(List<Product> productList);

    default MultiResponseDto<ProductResponseDto.GetList> productResponseGetListsDtoToMultiResponseDto(Page<Product> productPage) {
        List<ProductResponseDto.GetList> getDatas = productListToProductResponseGetListsDto(productPage.getContent());
        return new MultiResponseDto<>(getDatas, productPage);
    }
}
