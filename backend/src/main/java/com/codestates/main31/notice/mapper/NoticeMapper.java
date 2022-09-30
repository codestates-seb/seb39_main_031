package com.codestates.main31.notice.mapper;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.notice.dto.NoticeRequestDto;
import com.codestates.main31.notice.dto.NoticeResponseDto;
import com.codestates.main31.notice.entity.Notice;
import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NoticeMapper {

    Notice noticeRequestPostDtoToNotice(NoticeRequestDto.Post postDto);

    Notice noticeRequestPatchDtoToNotice(NoticeRequestDto.Patch patchDto);

    NoticeResponseDto.GetDetails noticeToNoticeResponseGetDetailDto(Notice notice);

    List<NoticeResponseDto.GetDetails> noticeListToNoticeResponseGetDetailsDto(List<Notice> noticeList);

    default MultiResponseDto<NoticeResponseDto.GetDetails> noticeResponseGetListsDtoToMultiResponseDto(Page<Notice> noticeList) {
        List<NoticeResponseDto.GetDetails> getDatas = noticeListToNoticeResponseGetDetailsDto(noticeList.getContent());
        return new MultiResponseDto<>(getDatas, noticeList);
    }
}
