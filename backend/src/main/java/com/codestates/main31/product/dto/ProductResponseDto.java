package com.codestates.main31.product.dto;

import com.codestates.main31.entereduser.ProductEnteredUserDTO;
import com.codestates.main31.product.entity.ProductState;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

public class ProductResponseDto {

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GetList {
        private Long productId;

        private String title;

        private LocalDateTime endedTime;

        private LocalDateTime generatedTime;

        private Integer goalQuantity;

        private int stateQuantity;

        private String unit;

        private Long unitPerPrice;

        private ProductState state;

        private String region;

        private String town;

        private List<String> productImg;

        private long userId;

        private String username;

        private String profileUrl;

        private long favoriteCount;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GetDetail {

        private Long productId;

        private String title;

        private String body;

        private LocalDateTime endedTime;

        private LocalDateTime generatedTime;

        private Integer goalQuantity;

        private int stateQuantity;

        private String unit;

        private Long unitPerPrice;

        private ProductState state;

        private String region;

        private String town;

        private String category;

        private List<String> productImg;

        private long userId;

        private String username;

        private String profileUrl;

        private List<ProductEnteredUserDTO> enteredUser;

    }

}
