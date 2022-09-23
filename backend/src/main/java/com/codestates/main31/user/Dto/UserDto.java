package com.codestates.main31.user.Dto;

import com.codestates.main31.address.Address;
import lombok.AllArgsConstructor;
import lombok.Getter;

public class UserDto {

    @Getter
    @AllArgsConstructor
    public static class Response {

        private long userId;

        private String username;

        private String email;

        private Address address;
    }

    @Getter
    @AllArgsConstructor
    public static class Post {

        private String username;

        private String email;

        private String password;

        private long addressId;
    }
}
