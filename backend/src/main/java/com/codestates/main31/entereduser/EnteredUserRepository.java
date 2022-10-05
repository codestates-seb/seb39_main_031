package com.codestates.main31.entereduser;

import net.bytebuddy.asm.Advice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EnteredUserRepository extends JpaRepository<EnteredUser, Long> {

    @Query(nativeQuery = true, value = "SELECT * FROM ENTERED_USER WHERE entered_id = :entered_id ; ")
    List<EnteredUser> findAllByEnteredId (@Param("entered_id") long entered_id);

    @Query(nativeQuery = true, value = "SELECT * FROM ENTERED_USER WHERE product_id = :product_id ; ")
    List<EnteredUser> findAllByProductId (@Param("product_id") long product_id);


}
