package com.codestates.main31.helper.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@RequiredArgsConstructor
public class SimpleEmailSender implements EmailSendable{
    private final JavaMailSender javaMailSender;

    @Override
    public void send(String[] to, String subject, String message) throws InterruptedException {
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(to);
        mailMessage.setFrom("여기붙어라 <"+mailMessage.getFrom()+">");
        mailMessage.setSubject(subject);
        mailMessage.setText(message);
        javaMailSender.send(mailMessage);

    }
}
