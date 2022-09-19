package com.codestates.main31.product.dto;

import com.codestates.main31.product.entity.ProductState;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
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

        private Integer goalNum;

        private Integer stateNum;

        private Long goalPrice;

        private Long statePrice;

        private ProductState state;

        private String area;

        private String town;

        private String productImg;

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

        private Integer goalNum;

        private Integer stateNum;

        private Long goalPrice;

        private Long statePrice;

        private ProductState state;

        private String area;

        private String town;

        private String productImg;

    }

}
