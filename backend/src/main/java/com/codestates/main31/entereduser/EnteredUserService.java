package com.codestates.main31.entereduser;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.entity.ProductState;
import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EnteredUserService {

    EnteredUserRepository repository;

    UserRepository userRepository;

    ProductRepository productRepository;




    public EnteredUser newEnterUser(String user_Email, long product_id, int amount) {

        User user = userRepository.findByEmail(user_Email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        Product product = productRepository.findById(product_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        // RiskAssessment data = RiskAssessment.builder(
        EnteredUser event = EnteredUser.builder()
                .user(user)
                .product(product)
                .amount(amount)
                .status(EnteredStatus.진행중)
                .deleteState(false)
                .build();
        repository.save(event);
        product.setStateNum(product.getStateNum()+amount);
        productRepository.save(product);
        return event;
    }

    public List<EnteredUser> findAllByProductEmail (String email) {
            User user = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
            return repository.findAllByEnteredId(user.getUserId());
        }

    public List<EnteredUser> findAllByEmail(String email){
            User user = userRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
            return repository.findAllByEnteredId(user.getUserId());
        }

    public List<EnteredUser> closeProduct(long product_id){
        Product product = productRepository.findById(product_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));;
        List<EnteredUser> events = repository.findAllByProductId(product_id);
        product.setState(ProductState.DEADLINE);
        for(EnteredUser comp : events){
            comp.setStatus(EnteredStatus.모집마감);
        };
        return repository.saveAll(events);
    }

    public EnteredUser exitEvent(long event_id){
        EnteredUser event = repository.findById(event_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.EVENT_NOT_FOUND));
        event.setStatus(EnteredStatus.종료);
        repository.save(event);
        long product_id = event.getProduct().getProductId();
        List<EnteredUser> events = repository.findAllByProductId(product_id);
        boolean allFinished = true;
        for(EnteredUser comp : events){
            if(comp.getStatus()!=EnteredStatus.종료 && comp.getStatus() !=EnteredStatus.평가완료){
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

    public EnteredUser rateEvent(long event_id, int Score){
        EnteredUser event = repository.findById(event_id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.EVENT_NOT_FOUND));
        event.setScore(Score);
        event.setStatus(EnteredStatus.평가완료);
        return event;
    }

    public List<EnteredUser> findAllByProductId(long product_id){
        return repository.findAllByProductId(product_id);
    }


}



