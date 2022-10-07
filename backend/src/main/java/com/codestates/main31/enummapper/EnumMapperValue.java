package com.codestates.main31.enummapper;

import lombok.Getter;

@Getter
public class EnumMapperValue {

    private String code;
    private String state;

    public EnumMapperValue(EnumMapperType enumMapperType) {
        code = enumMapperType.getCode();
        state = enumMapperType.getState();
    }
}
