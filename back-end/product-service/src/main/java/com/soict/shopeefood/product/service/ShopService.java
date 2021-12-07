package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Shop;
import com.soict.shopeefood.product.payload.ShopForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ShopService {

    Optional<Shop> findById(Integer shopId);

    Page<Shop> findAll(Pageable pageable);

    List<Shop> findByName(Integer shopId, String name);

    List<Shop> findBySection(Integer sectionId);

    List<Shop> findByShop(Integer shopId);

    Optional<Shop> upload(ShopForm ShopForm);

    Optional<Shop> update(ShopForm ShopForm);

    boolean deleteById(Integer idProd);
}
