package com.codestates.main31.address;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long>{

    @Query(nativeQuery = true, value = "SELECT * FROM address where region=:region ;"
    )
    List<Address> findByRegion(@Param("region") String region);
}
