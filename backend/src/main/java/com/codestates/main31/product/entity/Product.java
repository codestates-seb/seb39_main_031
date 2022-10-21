package com.codestates.main31.product.entity;

import com.codestates.main31.address.Address;
import com.codestates.main31.category.entity.Category;
import com.codestates.main31.entereduser.EnteredUser;
import com.codestates.main31.productimage.entity.ProductImage;
import com.codestates.main31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.DynamicInsert;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private String unit;

    @Column
    private Long unitPerPrice;

    @Column
    private boolean deleteState;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductState state = ProductState.PROCEED;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductImage> productImg = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<EnteredUser> enteredUser;

    public Product addProductImage(List<ProductImage> productImageList) {
        this.productImg = productImageList;
        productImageList.forEach(productImage -> productImage.setProduct(this));

        return this;
    }

    public void addProductImage(ProductImage productImage) {
        productImage.setProduct(this);
        this.productImg.add(productImage);
    }

    public void addEnteredUser(EnteredUser enteredUser) {
        this.enteredUser.add(enteredUser);
    }

    public void endProduct() {
        this.state = this.endedTime.isBefore(LocalDateTime.now()) ? ProductState.DEADLINE : this.state;
    }

}
