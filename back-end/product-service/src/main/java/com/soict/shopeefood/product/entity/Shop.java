package com.soict.shopeefood.product.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table( schema = "product_service", name = "shop")
public class Shop {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer shopId;

    @Column(name = "name")
    private String shopName;

    @Column(name = "img_url")
    private String imgUrl;

    @Column(name = "address")
    private String address;

    @Column(name = "district")
    private String district;

    @Column(name = "city")
    private String city;

    @Column(name = "price_range")
    private String priceRange;

//    @Transient
    @OneToMany(mappedBy = "shop")
    private List<ShopCategory> shopCategoryList = new ArrayList<>();
}
