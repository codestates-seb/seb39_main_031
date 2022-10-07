package com.codestates.main31.productimage.handler;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.PutObjectRequest;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Optional;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Getter
public class S3Handler {

    @Value("${image.path}")
    private String localPath;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${cloud.aws.s3.realPath}")
    private String realPath;

    @Value("${cloud.aws.s3.url}")
    private String url;

    private final AmazonS3 s3Client;

    public String uploadImage(MultipartFile multipartFile, String path) throws IOException {
        File uploadFile = convert(multipartFile).orElseThrow(() -> new IllegalArgumentException("파일이 없습니다."));

        String imageUrl = putS3(uploadFile, path + uploadFile.getName());
        removeNewFile(uploadFile);

        return imageUrl;
    }

    private Optional<File> convert(MultipartFile multipartFile) throws IOException {
        String originName = multipartFile.getOriginalFilename();
        String uuid = UUID.randomUUID().toString();
        String extension = originName.substring(originName.lastIndexOf("."));
        String savedName = uuid + extension;
        String savedPath = localPath + savedName;

        File file = new File(savedPath);
        multipartFile.transferTo(file);

        return Optional.of(file);
    }

    private void removeNewFile(File targetFile) {
        try {
            targetFile.delete();
        } catch (Exception e) {
            throw new RuntimeException("파일 삭제에 실패하였습니다.");
        }
    }

    private String putS3(File uploadFile, String fileName) {
        s3Client.putObject(
                new PutObjectRequest(bucket, fileName, uploadFile)
                        .withCannedAcl(CannedAccessControlList.PublicRead)
        );

        return s3Client.getUrl(bucket, fileName).toString();
    }

    public void updateImage(String curSource, String newSource) {
        try {
            curSource = URLDecoder.decode(curSource, "UTF-8");
            newSource = URLDecoder.decode(newSource, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        moveS3(curSource, newSource);
        deleteS3(curSource);
    }

    private void moveS3(String oldSource, String newSource) {
        s3Client.copyObject(bucket, oldSource, bucket, newSource);
    }

    private void deleteS3(String source) {
        s3Client.deleteObject(bucket, source);
    }


}
