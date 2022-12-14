package com.codestates.main31.entereduser;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.entity.ProductState;
import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.scoredBoard.ScoreBoardService;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class EnteredUserService {

    private final EnteredUserRepository repository;

    private final UserRepository userRepository;

    private final ProductRepository productRepository;

    private final ScoreBoardService scoreUser;



    public EnteredUser newEnterUser(long user_id, long product_id, int amount) {

        List<EnteredUser> checkEvent = repository.findByProductIdAndUserId(user_id,product_id);
        if(checkEvent.size()!=0){
            throw new BusinessLogicException(ExceptionCode.EVENT_EXIST);
        }
        User user = userRepository.findById(user_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        System.out.println(user.getEmail());
        Product product = productRepository.findById(product_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        System.out.println(product.getAddress().getTown() + "--" + product.getBody());
//        if(product.getGoalQuantity() < product.getStateQuantity()+amount){
//            throw new BusinessLogicException(ExceptionCode.MORE_THAN_GOAL_QUANTITY);
//        }

        if(product.getState()!=ProductState.PROCEED){
            throw new BusinessLogicException(ExceptionCode.NOT_APPROPRIATE_STATE);
        }

        EnteredUser event = EnteredUser.builder()
                .user(user)
                .product(product)
                .amount(amount)
                .status(EnteredStatus.?????????)
                .deleteState(false)
                .build();
        repository.save(event);
        product.setStateQuantity(product.getStateQuantity()+amount);
        product.addEnteredUser(event);
        productRepository.save(product);
        return event;
    }

    public List<EnteredUser> findAllByProductEmail (long user_id) {
            User user = userRepository.findById(user_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
            return repository.findAllByEnteredId(user.getUserId());
        }

    public List<EnteredUser> findAllByEmail(long user_id){
            User user = userRepository.findById(user_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
            return repository.findAllByEnteredId(user.getUserId());
        }

    public List<EnteredUser> closeProduct(long product_id){
        Product product = productRepository.findById(product_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));;
        List<EnteredUser> events = repository.findAllByProductId(product_id);
        product.setState(ProductState.DEADLINE);
        for(EnteredUser comp : events){
            comp.setStatus(EnteredStatus.????????????);
        };
        return repository.saveAll(events);
    }

    public EnteredUser exitEvent(long event_id){
        EnteredUser event = repository.findById(event_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.EVENT_NOT_FOUND));
        event.setStatus(EnteredStatus.??????);
        repository.save(event);
        long product_id = event.getProduct().getProductId();
        List<EnteredUser> events = repository.findAllByProductId(product_id);
        boolean allFinished = true;
        for(EnteredUser comp : events){
            if(comp.getStatus()!=EnteredStatus.?????? && comp.getStatus() !=EnteredStatus.????????????){
                allFinished = false;
            };
        };
        if(allFinished){
          Product product =  productRepository.findById(product_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
          product.setState(ProductState.TERMINATE);
          productRepository.save(product);
        }
        return event;
    }

    public Map<String, Object> rateEvent(long event_id, int score){
        EnteredUser event = repository.findById(event_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.EVENT_NOT_FOUND));
        event.setScore(score);
        event.setStatus(EnteredStatus.????????????);
        repository.save(event);
        User postUser = event.getProduct().getUser();
        float finalScore = scoreUser.avgScore(postUser, event.getUser(), event.getProduct(),score);
        postUser.setAvgScore(finalScore);
        userRepository.save(postUser);
        Map<String, Object> result = new HashMap<>();
        result.put("rate", event);
        result.put("rated_user", postUser);
        return result;
    }


    public List<EnteredUser> findAllByProductId(long product_id){
        return repository.findAllByProductId(product_id);
    }

    public EnteredUser cancelEvent(long event_id) {
        EnteredUser enteredUser = repository.findById(event_id).orElseThrow( ()-> new BusinessLogicException(ExceptionCode.EVENT_NOT_FOUND));
        Product product = enteredUser.getProduct();
        enteredUser.setDeleteState(true);
        repository.save(enteredUser);
        product.setStateQuantity(product.getStateQuantity()-enteredUser.getAmount());
        productRepository.save(product);

        return enteredUser;
    }


}



