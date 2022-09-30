package com.codestates.main31.entereduser;

import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

import javax.persistence.*;

@Data
@Getter
@AllArgsConstructor
public class PostEnteredUserDTO {

    private long product_id;

    private int amount;

}
