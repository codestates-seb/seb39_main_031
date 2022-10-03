package com.codestates.main31.product.entity;

import com.codestates.main31.category.entity.Category;
import com.codestates.main31.productimage.entity.ProductImage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(nullable = false, length = 100)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime generatedTime = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime endedTime;

    @Column(nullable = false)
    private Integer goalQuantity;

    @Column
    private int stateQuantity;

    @Column(nullable = false)
    private Long unit;

    @Column
    private Long unitPerPrice;

    @Column
    private boolean deleteState;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductState state = ProductState.PROCEED;

    @Column(nullable = false)
    private String region;

    @Column(nullable = false)
    private String town;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "product")
    private List<ProductImage> productImg;

    /**
     * Todo: Security 후 적용 예정
     */
//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;

    public Product addProductImage(List<ProductImage> productImageList) {
        this.productImg = productImageList;
        productImageList.forEach(productImage -> productImage.setProduct(this));

        return this;
    }

}
