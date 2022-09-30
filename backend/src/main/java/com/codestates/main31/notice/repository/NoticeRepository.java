package com.codestates.main31.notice.repository;

import com.codestates.main31.notice.entity.Notice;
import com.codestates.main31.product.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {

    Page<Notice> findAllByProduct(Product product, Pageable pageable);
}
