package com.codestates.main31.product.dto;

import com.codestates.main31.product.entity.ProductState;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

public class ProductRequestDto {

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String category;

        private String productImg;

        private String title;

        private Integer goalNum;

        private Long goalPrice;

        private LocalDateTime endedTime;

        private String area;

        private String town;

        private String body;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private String productImg;

        private String title;

        private Integer goalNum;

        private Long goalPrice;

        private ProductState state;

        private LocalDateTime endedTime;

        private String body;

    }
}
