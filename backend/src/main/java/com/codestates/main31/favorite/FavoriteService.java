package com.codestates.main31.favorite;

import com.codestates.main31.exception.BusinessLogicException;
import com.codestates.main31.exception.ExceptionCode;
import com.codestates.main31.product.entity.Product;
import com.codestates.main31.product.repository.ProductRepository;
import com.codestates.main31.user.Dto.UserDto;
import com.codestates.main31.user.entity.User;
import com.codestates.main31.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FavoriteService {

    FavoriteRepository favoriteRepository;

    UserRepository userRepository;

    ProductRepository productRepository;


    public Favorite changeState(Long productId,Long userId){
        Favorite favorite = favoriteRepository.findId(productId,userId).orElse(null);

        if(favorite==null){
            Favorite newfavorite = new Favorite();
            User user = userRepository.findById(userId).orElse(null);
            Product product =productRepository.findById(productId).orElseThrow(()-> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
            favorite.setUser(user);
            favorite.setProduct(product);
        } else {
            favorite.setFavorite(!favorite.isFavorite());
        }

        return favorite;
    }
    public Favorite findByProductId(Long productId,Long userId){
        Favorite favorite = favoriteRepository.findId(productId,userId).orElse(null);

        return favorite;
    }

    public List<Favorite> findMyFavorites(Long userId){
        List<Favorite> favorites = favoriteRepository.findAllByUserId(userId);
        return favorites;
    }


}
