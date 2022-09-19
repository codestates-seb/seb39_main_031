package com.codestates.main31.product.entity;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ProductState {

    PREPARING("준비중"),
    PROCEEDING("진행중"),
    IMMINENT("마감임박"),
    DEADLINE("마감");

    private final String status;

}
