package com.codestates.main31.entereduser;


import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.user.auth.filter.entity.PrincipalDetails;
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
@RequestMapping("/EnteredUser")
@RequiredArgsConstructor
public class EnteredUserController {

    private EnteredUserService service;
    private UserRepository userRepository;
    private ProductRepository productRepository;


    // 새 공구 참여
    @PostMapping("/")
    public ResponseEntity postEnteredUser(@AuthenticationPrincipal PrincipalDetails principalDetails ,@RequestBody PostEnteredUserDTO dto) {
        EnteredUser result = service.newEnterUser(principalDetails.getUser().getUserId(), dto.getProduct_id(), dto.getAmount());
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    //내가 참여한 공구
    @GetMapping("/entered")
    public ResponseEntity getMyEnteredList(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        List<EnteredUser> result = service.findAllByEmail(principalDetails.getUser().getUserId());
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    //내가 연 공구 참여자 리스트 보기(공구 내용 접속)
    @GetMapping("/opened/{product_id}")
    public ResponseEntity getMyOpenedList(@PathVariable("product_id") long product_id) {
        List<EnteredUser> result = service.findAllByProductId(product_id);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }


    //모집 종료하기
    @PatchMapping("/close/{product_id}")
    public ResponseEntity closeProduct(@PathVariable("product_id")  long product_id) {
        List<EnteredUser> result = service.closeProduct(product_id);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    // 공구 종료 하기
    @PatchMapping("/exit/{event_id}")
    public ResponseEntity exitEvent(@PathVariable("event_id")  long event_id) {
        EnteredUser result = service.exitEvent(event_id);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    //평가하기
    @PatchMapping("/rate/{event_id}")
    public ResponseEntity rateEvent(@PathVariable("event_id")  long event_id,@RequestBody int score) {
        Map<String, Object> result = service.rateEvent(event_id, score);
        return new ResponseEntity<Map>(result, HttpStatus.OK);
    }

    //공구 취소하기
    @PatchMapping("/cancel/{event_id}/")
    public ResponseEntity cancelEvent(@PathVariable("event_id")  long event_id) {
        EnteredUser result = service.cancelEvent(event_id);
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

}
