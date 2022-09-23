package com.codestates.main31.helper.event;

import com.codestates.main31.helper.email.EmailSender;
import com.codestates.main31.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.mail.MailSendException;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.stereotype.Component;

import java.security.SecureRandom;
import java.util.Date;

@EnableAsync
@Configuration
@Component
@Slf4j
public class UserPasswordEventListener {

    @Value("${mail.subject.member.registration}")
    private String subject;
    private final EmailSender emailSender;
    private final UserService memberService;

    public UserPasswordEventListener(EmailSender emailSender, UserService memberService) {
        this.emailSender = emailSender;
        this.memberService = memberService;
    }

    @Async
    @EventListener
    public void listen(UserPasswordApplicationEvent event) throws Exception {
        try {
            String randomPassword = getRandomPassword(8);
            memberService.changePassword(event.getUser(), randomPassword);

            String[] to = new String[]{event.getUser().getEmail()};
            String message = event.getUser().getUsername() + "님의 비밀번호가 재설정되었습니다.\n"
                    + "임시 비밀번호 : "+randomPassword;

            emailSender.sendEmail(to, subject, message);
        } catch (MailSendException e) {
            e.printStackTrace();
            log.error("MailSendException: rollback for Member Registration:");
        }
    }

    public String getRandomPassword(int size) {
        char[] charSet = new char[]{
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
                'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                '!', '@', '#', '$', '%', '^', '&'};

        StringBuffer sb = new StringBuffer();
        SecureRandom sr = new SecureRandom();
        sr.setSeed(new Date().getTime());

        int idx = 0;
        int len = charSet.length;
        for (int i = 0; i < size; i++) {
            // idx = (int) (len * Math.random());
            idx = sr.nextInt(len);
            sb.append(charSet[idx]);
        }

        return sb.toString();
    }

}