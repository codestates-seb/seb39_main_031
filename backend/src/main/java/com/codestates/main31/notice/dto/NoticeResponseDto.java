package com.codestates.main31.notice.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class NoticeResponseDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class GetDetails{

        private Long noticeId;

        private String title;

        private String body;
    }

}
