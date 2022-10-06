package com.codestates.main31.productimage.handler;

import com.codestates.main31.productimage.entity.ProductImage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ImageHandler {

    @Value("${cloud.aws.s3.titlePath}")
    private String titlePath;

    private final S3Handler s3Handler;

    public List<ProductImage> parseImage(List<MultipartFile> multipartFiles) throws IOException {

        List<ProductImage> productImageList = new ArrayList<>();

        for (MultipartFile multipartFile : multipartFiles) {
            if (!multipartFile.isEmpty()) {

                String originName = multipartFile.getOriginalFilename();

                String savedPath = s3Handler.uploadImage(multipartFile, titlePath);

                ProductImage productImage = ProductImage.builder()
                        .savedPath(savedPath)
                        .build();
                productImageList.add(productImage);
            }
        }

        return productImageList;
    }
}
