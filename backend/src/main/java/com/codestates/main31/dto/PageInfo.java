package com.codestates.main31.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private long totalElement;
    private int totalPages;
}
