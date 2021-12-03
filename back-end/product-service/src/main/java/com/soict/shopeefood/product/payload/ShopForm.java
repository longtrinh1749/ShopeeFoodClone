package com.soict.shopeefood.product.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShopForm {
    private Integer shopId;
    private String shopName;
    private String imgUrl;
    private String address;
    private String district;
    private String city;
    private String priceRange;
    private List<CategoryForm> categoryList;
}
