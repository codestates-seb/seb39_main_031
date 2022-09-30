package com.codestates.main31.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

public class NoticeRequestDto {

    @Getter
    @NoArgsConstructor
    public static class Post {

        private String title;

        private String body;
    }

    @Getter
    @NoArgsConstructor
    public static class Patch {

        private String title;

        private String body;
    }
}
