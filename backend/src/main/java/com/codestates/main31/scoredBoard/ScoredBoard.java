package com.codestates.main31.scoredBoard;

import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@Table(name="SCORE_BOARD")
public class ScoredBoard {

    @Id
    private long scored_id;

    @ManyToOne
    @JoinColumn(name = "posted_user")
    private User postedUser;

    @ManyToOne
    @JoinColumn(name = "entered_user")
    private User enteredUser;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "score")
    private int score;
}
