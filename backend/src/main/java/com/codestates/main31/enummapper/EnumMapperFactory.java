package com.codestates.main31.enummapper;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class EnumMapperFactory {

    private Map<String, List<EnumMapperValue>> factory;

    public void put(String key, Class<? extends EnumMapperType> e) {
        factory.put(key, toEnumValues(e));
    }

    public List<EnumMapperValue> get(String key) {
        return factory.get(key);
    }

    public List<EnumMapperValue> toEnumValues(Class<? extends EnumMapperType> e) {
        return Arrays.stream(e.getEnumConstants()).map(EnumMapperValue::new)
                .collect(Collectors.toList());
    }
}
