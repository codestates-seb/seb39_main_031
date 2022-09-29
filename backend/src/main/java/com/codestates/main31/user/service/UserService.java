package com.codestates.main31.user.service;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.helper.event.UserPasswordApplicationEvent;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;


@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final ApplicationEventPublisher publisher;


    public User getUser(Long memberId){
        User user = userRepository.findById(memberId).orElseThrow(()-> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return user;
    }

    public User findByEmail(String email){
        User nan = new User();
        User user = userRepository.findByEmail(email).orElse(nan);
        return user;
    }

    public User postUser(User newUser) {
        User user;
        Boolean existUser = userRepository.findByEmail(newUser.getEmail()).isPresent();
        newUser.setPassword(passwordEncoder.encode(newUser.getPassword()));

        if(existUser) {
            user =userRepository.findByEmail(newUser.getEmail()).orElse(null);
            if(!(user.isDeleteState())){
                throw new BusinessLogicException(ExceptionCode.USER_EMAIL_EXIST);
            }
        }
        user = newUser;
        return userRepository.save(user);
    }

    public User findPassword(String email){
        User user = userRepository.findByEmail(email).orElse(null);
        publisher.publishEvent(new UserPasswordApplicationEvent(this, user));

        return user;
    }

    public void changePassword(User user, String newPassword){
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);
    }

    public void patchUser(){

    }

    public void deleteUser(){

    }
}
