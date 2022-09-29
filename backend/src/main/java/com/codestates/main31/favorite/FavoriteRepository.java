package com.codestates.main31.favorite;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
        @Query(nativeQuery = true,	value = "SELECT * FROM FAVORITE WHERE product_id = :product_id and user_id = :user_id ;")
        Optional<Favorite> findId(@Param(value = "product_id") long ProductId,@Param(value = "user_id") long UserId);

        @Query(nativeQuery = true,	value = "SELECT * FROM FAVORITE WHERE user_id = :user_id ;")
        List<Favorite> findAllByUserId(@Param(value = "user_id") long UserId);
}
