package com.codestates.main31.enummapper;

import com.codestates.main31.product.entity.ProductState;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Configuration
public class EnumMapper {

    @Bean
    public EnumMapperFactory createEnumMapperFactory() {
        EnumMapperFactory enumMapperFactory = new EnumMapperFactory(new HashMap<>());
        enumMapperFactory.put("ProductState", ProductState.class);

        return enumMapperFactory;
    }
}
