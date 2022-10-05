package com.codestates.main31.scoredBoard;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.el.BeanELResolver;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScoreBoardService {

    private final UserRepository userRepository;

    private final ScoredBoardRepository repository;


    public float avgScore(User postedUser, User enteredUser, Product product, int score){
        ScoredBoard result = ScoredBoard.builder()
                .enteredUser(enteredUser)
                .postedUser(postedUser)
                .product(product)
                .score(score)
                .build();
        repository.save(result);
        float avgScore = repository.findAllByPostedUser(postedUser.getUserId());

        User user = userRepository.findById(postedUser.getUserId()).orElseThrow(()->new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        user.setAvgScore(avgScore);
        return avgScore;
    }

}
