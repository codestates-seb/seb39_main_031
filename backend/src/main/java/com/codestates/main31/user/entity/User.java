package com.codestates.main31.user.entity;

import com.codestates.main31.address.Address;
import com.codestates.main31.user.auth.filter.entity.RoleType;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(length = 45, nullable = false)
    private String username;

    @Column(length = 45, nullable = false)
    private String email;

    @Column(nullable = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;

    @Column(name = "delete_state")
    private boolean deleteState;

    @Column(name = "generated_time")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss", timezone = "Asia/Seoul")
    private Timestamp generatedTime;

    @Column(name = "avg_score")
    private float avgScore;

    @Enumerated(EnumType.STRING)
    private RoleType role;

    @Builder
    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = RoleType.USER;
    }
}
