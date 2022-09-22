package com.codestates.main31.user.mapper;

import com.codestates.main31.user.Dto.UserDto;
import com.codestates.main31.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserDto.Post userDtoPost);

    UserDto.Response userToUserResponseDto(User user);
}
