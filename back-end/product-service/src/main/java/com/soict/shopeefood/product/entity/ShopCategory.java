package com.soict.shopeefood.product.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "product_service", name = "shop_category")
public class ShopCategory {

    @EmbeddedId
    private ShopCategoryId shopCategoryId;

    @ManyToOne(optional = false)
    @MapsId("shopId")
    @JoinColumn(name = "shop_id", referencedColumnName = "id")
    private Shop shop;

    @MapsId("catId")
    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;

}
