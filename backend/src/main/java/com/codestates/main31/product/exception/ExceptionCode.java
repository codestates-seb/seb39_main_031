package com.codestates.main31.product.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ExceptionCode {

    PRODUCT_NOT_FOUND(404, "Product not exist"),
    PRODUCT_EXIST(409, "Product already exist"),
    INVALID_PRODUCT_VALUE(400, "Invalid Product Argument");

    @Getter
    private final int status;

    @Getter
    private final String message;
}
