package com.codestates.main31.product.repository;

import com.codestates.main31.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.Specification;

public class ProductSpecification {

    public static Specification<Product> equalCategory(String category) {
        return (root, query, builder) -> builder.equal(root.get("category"), category);
    }

    public static Specification<Product> equalArea(String area) {
        return (root, query, builder) -> builder.equal(root.get("area"), area);
    }

    public static Specification<Product> equalTown(String town) {
        return (root, query, builder) -> builder.equal(root.get("town"), town);
    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ProductCriteria{
        private String category;
        private String region;
        private String town;
    }

}
