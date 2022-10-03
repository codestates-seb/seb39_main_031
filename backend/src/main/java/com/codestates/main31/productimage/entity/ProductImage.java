package com.codestates.main31.productimage.entity;

import com.codestates.main31.product.entity.Product;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ProductImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productImageId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(nullable = false)
    private String originName;

    @Column(nullable = false)
    private String savedPath;

    @Builder
    public ProductImage(Product product, String originName, String savedPath) {
        this.originName = originName;
        this.savedPath = savedPath;
    }
}
