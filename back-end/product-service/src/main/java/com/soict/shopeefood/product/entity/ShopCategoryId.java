package com.soict.shopeefood.product.entity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class ShopCategoryId implements Serializable {

    @Column(name = "shop_id")
    private Integer shopId;

    @Column(name = "category_id")
    private Integer catId;

}
