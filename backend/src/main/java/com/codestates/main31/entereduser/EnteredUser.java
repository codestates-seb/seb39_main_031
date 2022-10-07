package com.codestates.main31.entereduser;

import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Entity
@Table
public class EnteredUser {

    @Id
    @Column(name="entered_event_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long enteredEventId;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "entered_id")
    private User user;

    @Column(name ="amount")
    private int amount;

    @Column(name = "score")
    private int score;

    @Column
    @Enumerated(EnumType.STRING)
    private EnteredStatus status;

    @Column(name = "delete_state")
    private boolean deleteState;


}
