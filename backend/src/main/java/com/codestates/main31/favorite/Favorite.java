package com.codestates.main31.favorite;

import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Favorite {
    @Id
    @Column(name="favorite_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long favoriteId;

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "favorite")
    private boolean favorite;

}
