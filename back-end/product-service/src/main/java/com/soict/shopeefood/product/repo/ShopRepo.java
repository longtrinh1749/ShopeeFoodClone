package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Shop;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ShopRepo extends JpaRepository<Shop, Integer> {

    @Query(value = "select s from Shop s where s.shopId = ?1")
    Optional<Shop> findById(Integer shopId);

    @Query(value = "select s from Shop s order by s.shopId desc ")
    List<Shop> findAll();

    @Query(value = "select s from Shop s order by s.shopId desc ")
    Page<Shop> findAllByPage(Pageable pageable);

    @Query(value = "select s from Shop s where s.shopName like %:name% or s.address like %:name% order by s.shopName asc")
    Page<Shop> findByShopNameAndAddress(@Param("name") String name, Pageable pageable);

    @Query(value = "select s from Shop s where s.district like %:district% order by s.shopName asc")
    Page<Shop> findByShopDistrict(@Param("district") String district, Pageable pageable);

}
