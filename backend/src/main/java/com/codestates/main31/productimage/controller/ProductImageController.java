package com.codestates.main31.productimage.controller;

import com.codestates.main31.dto.SingleResponseDto;
import com.codestates.main31.productimage.handler.S3Handler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
public class ProductImageController {

    private final S3Handler s3Handler;

    @Value("${cloud.aws.s3.tempPath}")
    private String tempPath;

    @Value("${cloud.aws.s3.titlePath}")
    private String titlePath;

    @PostMapping("/image/upload")
    public ResponseEntity<SingleResponseDto<String>> uploadImage(@RequestParam String type,
                                                                 @RequestParam("file") MultipartFile multipartFile) throws Exception {
        String path = type.equals("editor") ? tempPath : type.equals("title") ? titlePath : null;
        return new ResponseEntity<>(new SingleResponseDto<>(s3Handler.uploadImage(multipartFile, path)), HttpStatus.CREATED);
    }

}

