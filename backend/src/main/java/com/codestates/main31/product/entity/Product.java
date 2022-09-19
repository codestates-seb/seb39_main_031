package com.codestates.main31.product.entity;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
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
    private LocalDateTime generatedTime;

    @Column(nullable = false)
    private LocalDateTime endedTime;

    @Column(nullable = false)
    private Integer goalNum;

    @Column(nullable = false)
    private Integer stateNum;

    @Column(nullable = false)
    private Long goalPrice;

    @Column(nullable = false)
    private Long statePrice;

    @Column(nullable = false)
    private Boolean deleteState;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProductState state;

    @Column(nullable = false)
    private String area;

    @Column(nullable = false)
    private String town;

    @Column(nullable = false)
    private String category;

    /**
     * Todo: Security 후 적용 예정
     */
//    @ManyToOne
//    @JoinColumn(name = "userId")
//    private User user;

}
