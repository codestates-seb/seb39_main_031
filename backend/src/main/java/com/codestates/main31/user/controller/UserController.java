package com.codestates.main31.user.controller;

import com.codestates.main31.address.Address;
import com.codestates.main31.address.AddressService;
import com.codestates.main31.entereduser.EnteredUser;
import com.codestates.main31.user.Dto.UserDto;
import com.codestates.main31.user.auth.filter.JwtAuthenticationFilter;
import com.codestates.main31.user.auth.filter.entity.PrincipalDetails;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.mapper.UserMapper;
import com.codestates.main31.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.*;

import java.nio.file.attribute.UserPrincipal;
import java.security.Principal;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class UserController {

    private final UserService userService;

    private final AddressService addressService;

    private final UserMapper mapper;

    @GetMapping("/{member-id}")
    public ResponseEntity<UserDto.Response> getUser(@PathVariable("member-id") Long memberId) {
        User savedUser = userService.getUser(memberId);
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.OK);
    }

    @GetMapping("/me")
    public ResponseEntity getUserByEmail(@AuthenticationPrincipal PrincipalDetails principalDetails) {
        User result = principalDetails.getUser();
        Map<String, Object> map = new HashMap<>();
        map.put("result",result);
        return new ResponseEntity<Map>(map, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDto.Response> postUser(@RequestBody UserDto.Post postUser) {
        User user = mapper.userPostDtoToUser(postUser);
        user.setGeneratedTime(Timestamp.valueOf(LocalDateTime.now()));
        Address address = addressService.findAddressByRegionAndTown(postUser.getRegion(), postUser.getTown());
        user.setAddress(address);
        User savedUser = userService.postUser(user);
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.CREATED);
    }

    @PostMapping("/{email}/find")
    public ResponseEntity<UserDto.Response> findUser(@PathVariable("email") String email) {
        User resetUser = userService.findPassword(email);
        return new ResponseEntity<>(mapper.userToUserResponseDto(resetUser), HttpStatus.CREATED);
    }


}
