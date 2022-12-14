package com.codestates.main31.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum ExceptionCode {

    PRODUCT_NOT_FOUND(404, "Product not exist"),
    NOTICE_NOT_FOUND(404, "Notice not exist"),
    CATEGORY_NOT_FOUND(404, "Category not exist"),

    PRODUCT_EXIST(409, "Product already exist"),

    INVALID_PRODUCT_VALUE(400, "Invalid Product Argument"),

    MORE_THAN_GOAL_QUANTITY(408, "state will be more than goal"),
    EVENT_EXIST(409, "event is already exist"),
    NOT_APPROPRIATE_STATE(408, "not appropriate state"),

    USER_NOT_FOUND(404, "User is not exist"),
    USER_EMAIL_EXIST(409, "User is already exist"),
    ADDRESS_NOT_FOUND(404, "Address is not exist"),
    FAVORITE_NOT_FOUND(404, "Favorite is not exist"),
    EVENT_NOT_FOUND(404, "event is not exist")




    ;

    @Getter
    private final int status;

    @Getter
    private final String message;
}
