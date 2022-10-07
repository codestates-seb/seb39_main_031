package com.codestates.main31.entereduser;

import net.bytebuddy.asm.Advice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnteredUserRepository extends JpaRepository<EnteredUser, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM entered_user WHERE entered_id = :entered_id ; ")
    List<EnteredUser> findAllByEnteredId (@Param("entered_id") long entered_id);

    @Query(nativeQuery = true, value = "SELECT * FROM entered_user WHERE product_id = :product_id ; ")
    List<EnteredUser> findAllByProductId (@Param("product_id") long product_id);

    @Query(nativeQuery = true, value = "SELECT * FROM entered_user WHERE product_id = :product_id AND entered_id = :entered_id ; ")
    List<EnteredUser> findByProductIdAndUserId(@Param("entered_id")long entered_id, @Param("product_id") long product_id);
}
