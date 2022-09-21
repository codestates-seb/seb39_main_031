package com.codestates.main31.product.entity;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
//@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ProductState {
    PROCEED("진행중"),
    DEADLINE("모집마감"),
    TERMINATE("종료");

    private final String status;
}
