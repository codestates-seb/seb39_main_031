package com.codestates.main31.product.entity;

import com.codestates.main31.enummapper.EnumMapperType;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RequiredArgsConstructor
//@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum ProductState implements EnumMapperType {
    PROCEED("진행중"),
    DEADLINE("모집마감"),
    TERMINATE("종료");

    @Getter
    private final String state;

    @Override
    public String getCode() {
        return name();
    }

    // 미리 캐싱하여 State -> Value 변환
    public static final Map<String, ProductState> codeMap = Stream.of(values()).collect(Collectors.toMap(ProductState::getState, s -> s));

    public static ProductState valueOfState(String state) {
        return codeMap.get(state);
    }

}
