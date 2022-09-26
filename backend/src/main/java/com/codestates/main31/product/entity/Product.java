package com.codestates.main31.product.entity;

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

    @Column(nullable = false, length = 255)
    private String body;

    @CreatedDate
    @Column(nullable = false)
    private LocalDateTime generatedTime = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime endedTime;

    @Column(nullable = false)
    private Integer goalNum;

    @Column
    private int stateNum;

    @Column(nullable = false)
    private Long goalPrice;

    @Column
    private long statePrice;

    @Column
    private boolean deleteState;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductState state = ProductState.PROCEED;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String town;

    @Column(nullable = false)
    private String category;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
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
