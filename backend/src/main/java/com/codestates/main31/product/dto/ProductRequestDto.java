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

        private String title;

        private String body;

        private Integer goalNum;

        private Long goalPrice;

        private String productImg;

        private String area;

        private String town;

        private String category;

        private LocalDateTime endedTime;

    }

    @Getter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Patch {

        private String title;

        private String body;

        private Integer goalNum;

        private Long goalPrice;

        private String productImg;

        private ProductState state;

        private LocalDateTime endedTime;

    }
}
