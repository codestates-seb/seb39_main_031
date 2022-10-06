package com.codestates.main31.product.mapper;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.product.dto.ProductRequestDto;
import com.codestates.main31.product.dto.ProductResponseDto;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.productimage.mapper.ProductImageMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring", uses = {ProductImageMapper.class})
public interface ProductMapper {
    @Mapping(source = "region", target = "address.region")
    @Mapping(source = "town", target = "address.town")
    @Mapping(source = "category", target = "category.category")
    Product productRequestPostDtoToProduct(ProductRequestDto.Post postDto);

    Product productRequestPatchDtoToProduct(ProductRequestDto.Patch patchDto);

    @Mapping(target = "category", source = "category.category")
    @Mapping(target = "region", source = "address.region")
    @Mapping(target = "town", source = "address.town")
    @Mapping(target = "userId", source = "user.userId")
    @Mapping(target = "username", source = "user.username")
    ProductResponseDto.GetDetail productToProductResponseGetDetailDto(Product product);

    @Mapping(target = "region", source = "address.region")
    @Mapping(target = "town", source = "address.town")
    @Mapping(target = "userId", source = "user.userId")
    @Mapping(target = "username", source = "user.username")
    ProductResponseDto.GetList productToProductResponseGetListDto(Product product);

    List<ProductResponseDto.GetList> productListToProductResponseGetListsDto(List<Product> productList);

    default MultiResponseDto<ProductResponseDto.GetList> productResponseGetListsDtoToMultiResponseDto(Page<Product> productPage) {
        List<ProductResponseDto.GetList> getDatas = productListToProductResponseGetListsDto(productPage.getContent());
        return new MultiResponseDto<>(getDatas, productPage);
    }
}
