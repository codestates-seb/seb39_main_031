package com.codestates.main31.entereduser;

import com.codestates.main31.product.entity.Product;
import com.codestates.main31.user.entity.User;
import lombok.*;

import javax.persistence.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PostEnteredUserDTO {

    private long product_id;

    private int amount;

}
