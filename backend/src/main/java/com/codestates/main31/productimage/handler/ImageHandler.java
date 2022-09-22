package com.codestates.main31.productimage.handler;

import com.codestates.main31.productimage.entity.ProductImage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
public class ImageHandler {

    @Value("${image.path}")
    private String imagePath;

    public List<ProductImage> parseImage(List<MultipartFile> multipartFiles) throws IOException {

        List<ProductImage> productImageList = new ArrayList<>();

        for (MultipartFile multipartFile : multipartFiles) {
            if (!multipartFile.isEmpty()) {

                String originName = multipartFile.getOriginalFilename();
                String uuid = UUID.randomUUID().toString();
                String extension = originName.substring(originName.lastIndexOf("."));
                String savedName = uuid + extension;
                String savedPath = imagePath + savedName;

                ProductImage productImage = ProductImage.builder()
                        .originName(originName)
                        .savedName(savedName)
                        .savedPath(savedPath)
                        .build();
                productImageList.add(productImage);

                File file = new File(savedPath);
                if (!file.exists()) file.mkdirs();

                multipartFile.transferTo(file);
            }
        }

        return productImageList;
    }
}
