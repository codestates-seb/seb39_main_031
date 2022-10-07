package com.codestates.main31.scoredBoard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScoredBoardRepository extends JpaRepository<ScoredBoard, Long> {
    @Query(nativeQuery = true, value = "SELECT  AVG(score) FROM SCOREBOARD WHERE posted_user = :posted_user ; ")
    float findAllByPostedUser(@Param("posted_user") long posted_user);
}
