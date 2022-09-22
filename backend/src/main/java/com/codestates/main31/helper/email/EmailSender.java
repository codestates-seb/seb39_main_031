package com.codestates.main31.helper.email;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.MailSendException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class EmailSender {
    private final JavaMailSender mailSender;
    private final EmailSendable emailSendable;

    public void sendEmail(String[] to, String subject, String message) throws MailSendException, InterruptedException {
        emailSendable.send(to, subject, message);
    }
}
