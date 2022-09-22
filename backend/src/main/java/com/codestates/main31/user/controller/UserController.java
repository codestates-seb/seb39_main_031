package com.codestates.main31.user.controller;

import com.codestates.main31.address.Address;
import com.codestates.main31.address.AddressService;
import com.codestates.main31.user.Dto.UserDto;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.mapper.UserMapper;
import com.codestates.main31.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;

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

    @PostMapping("/me")
    public ResponseEntity<UserDto.Response> getUserByEmail(@RequestBody String email) {
        User savedUser = userService.findByEmail(email);
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<UserDto.Response> postUser(@RequestBody UserDto.Post postUser) {
        User user = mapper.userPostDtoToUser(postUser);
        user.setGeneratedTime(Timestamp.valueOf(LocalDateTime.now()));
        Address address = addressService.findAddress(postUser.getAddressId());
        user.setAddress(address);
        User savedUser = userService.postUser(user);
        return new ResponseEntity<>(mapper.userToUserResponseDto(savedUser), HttpStatus.CREATED);
    }

    @PostMapping("/{email}/find")
    public ResponseEntity<UserDto.Response> postUser(@PathVariable String email) {
        User resetUser = userService.findPassword(email);
        return new ResponseEntity<>(mapper.userToUserResponseDto(resetUser), HttpStatus.CREATED);
    }


}
