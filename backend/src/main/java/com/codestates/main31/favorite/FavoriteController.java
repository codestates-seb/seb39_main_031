package com.codestates.main31.favorite;

import com.auth0.jwt.JWT;
import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.user.Dto.UserDto;
import com.codestates.main31.user.auth.filter.entity.PrincipalDetails;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/favorite")
public class FavoriteController {
    UserRepository userRepository;
    FavoriteService favoriteService;
    // 즐겨찾기 Or 취소
    @PostMapping("/{product-id}")
    public ResponseEntity favoriteThis(@PathVariable("product-id") Long productId, @AuthenticationPrincipal PrincipalDetails principalDetails) {
        Favorite result = favoriteService.changeState(productId,principalDetails.getUser().getUserId());

        Map<String, Object> map = new HashMap<>();
        map.put("result",result);

        return new ResponseEntity<Map>(map, HttpStatus.OK);

    }
    // 즐겨찾기 id로 확인
    @GetMapping("/{product-id}")
    public ResponseEntity findByFavoriteId(@PathVariable("product-id") Long productId,@AuthenticationPrincipal PrincipalDetails principalDetails) {
        Favorite result = favoriteService.findByProductId(productId,principalDetails.getUser().getUserId());
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }
    // 내 즐겨찾기 확인하기
    @GetMapping("/mine")
    public ResponseEntity myFavoriteList(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        List<Favorite> result = favoriteService.findMyFavorites(principalDetails.getUser().getUserId());
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}
