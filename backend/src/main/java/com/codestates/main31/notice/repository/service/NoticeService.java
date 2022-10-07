package com.codestates.main31.notice.repository.service;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.notice.entity.Notice;
import com.codestates.main31.notice.repository.NoticeRepository;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class NoticeService {

    private final NoticeRepository noticeRepository;

    private final ProductService productService;

    public Notice createNotice(Long productId, Notice notice) {
        Product product = productService.findProduct(productId);
        notice.setProduct(product);
        return noticeRepository.save(notice);
    }

    @Transactional(readOnly = true)
    public Notice readNotice(Long productId, Long noticeId) {
        return findNotice(noticeId);
    }

    @Transactional(readOnly = true)
    public Page<Notice> readNoticeList(Long productId, int page, int size) {
        Product product = productService.findProduct(productId);
        return noticeRepository.findAllByProduct(product, PageRequest.of(page-1, size, Sort.Direction.DESC, "noticeId"));
    }

    public Notice updateNotice(Long productId, Long noticeId, Notice newNotice) {
        Notice curNotice = findNotice(noticeId);

        Optional.of(newNotice.getTitle())
                .ifPresent(title -> curNotice.setTitle(title));
        Optional.of(newNotice.getBody())
                .ifPresent(body -> curNotice.setBody(body));

        return curNotice;
    }

    public void deleteNotice(Long productId, Long noticeId) {
        findNotice(noticeId);
        noticeRepository.deleteById(noticeId);
    }

    private Notice findNotice(Long noticeId) {
        return noticeRepository.findById(noticeId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.NOTICE_NOT_FOUND));
    }



}
