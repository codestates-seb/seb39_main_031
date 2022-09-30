package com.codestates.main31.notice.controller;

import com.codestates.main31.dto.MultiResponseDto;
import com.codestates.main31.notice.dto.NoticeRequestDto;
import com.codestates.main31.notice.dto.NoticeResponseDto;
import com.codestates.main31.notice.entity.Notice;
import com.codestates.main31.notice.mapper.NoticeMapper;
import com.codestates.main31.notice.service.NoticeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/products/{productId}")
public class NoticeController {

    private final NoticeService noticeService;

    private final NoticeMapper noticeMapper;

    @PostMapping("/notices")
    public ResponseEntity<NoticeResponseDto.GetDetails> createNotice(@PathVariable Long productId,
                                                                     @RequestBody NoticeRequestDto.Post requestDto) {
        Notice savedNotice = noticeService.createNotice(productId, noticeMapper.noticeRequestPostDtoToNotice(requestDto));
        return new ResponseEntity<>(noticeMapper.noticeToNoticeResponseGetDetailDto(savedNotice), HttpStatus.CREATED);
    }

    @GetMapping("/notices/{noticeId}")
    public ResponseEntity<NoticeResponseDto.GetDetails> readNotice(@PathVariable Long productId,
                                                                   @PathVariable Long noticeId) {
        Notice notice = noticeService.readNotice(productId, noticeId);
        return new ResponseEntity<>(noticeMapper.noticeToNoticeResponseGetDetailDto(notice), HttpStatus.OK);
    }

    @GetMapping("/notices")
    public ResponseEntity<MultiResponseDto<NoticeResponseDto.GetDetails>> readNoticeList(@PathVariable Long productId,
                                                                                         @RequestParam int page,
                                                                                         @RequestParam(defaultValue = "10", required = false) int size) {
        Page<Notice> noticeList = noticeService.readNoticeList(productId, page, size);
        return new ResponseEntity<>(noticeMapper.noticeResponseGetListsDtoToMultiResponseDto(noticeList), HttpStatus.OK);
    }

    @PatchMapping("/notices/{noticeId}")
    public ResponseEntity<NoticeResponseDto.GetDetails> updateNotice(@PathVariable Long productId,
                                                                     @PathVariable Long noticeId,
                                                                     @RequestBody NoticeRequestDto.Patch requestDto) {
        Notice updatedNotice = noticeService.updateNotice(productId, noticeId, noticeMapper.noticeRequestPatchDtoToNotice(requestDto));
        return new ResponseEntity<>(noticeMapper.noticeToNoticeResponseGetDetailDto(updatedNotice), HttpStatus.CREATED);
    }

    @DeleteMapping("/notices/{noticeId}")
    public ResponseEntity<Void> deleteNotice(@PathVariable Long productId,
                                             @PathVariable Long noticeId) {
        noticeService.deleteNotice(productId, noticeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
