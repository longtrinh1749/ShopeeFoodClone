package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.ShopCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface ShopCategoryRepo extends JpaRepository<ShopCategory, Integer> {

    @Query(value = "select s from ShopCategory s where s.shop.shopId = ?1 ")
    List<ShopCategory> findByShopId(Integer shopId);

    @Query(value = "select s from ShopCategory s where s.category.catId = ?1 ")
    List<ShopCategory> findByCatId(Integer catId);

    @Modifying
    @Transactional
    @Query(value = "delete from ShopCategory s where s.shop.shopId = ?1 ")
    int deleteByShopId(Integer shopId);

}
