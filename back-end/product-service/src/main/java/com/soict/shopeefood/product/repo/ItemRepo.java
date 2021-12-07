package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemRepo extends JpaRepository<Item, Integer>{

    @Query(value = "select i from Item i ")
    Page<Item> findAll(Pageable pageable);

    @Query(value = "select i from Item i where i.itemId = ?1")
    Optional<Item> findById(Integer itemId);

    @Query(value = "select i from Item i where i.deleted = false and i.section.shop.shopId = :shopId and i.itemName like %:name%")
    List<Item> findByName(@Param("shopId") Integer shopId, @Param("name") String name);

    @Query(value = "select i from Item i where i.deleted = false and i.section.sectionId = ?1")
    List<Item> findBySection(Integer sectionId);

    @Query(value = "select i from Item i where i.deleted = false and i.section.shop.shopId = ?1")
    List<Item> findByShop(Integer shopId);

    @Modifying
    @Transactional
    @Query(value = "update Item i set i.deleted = true where i.itemId = ?1")
    int deleteByItemId(Integer itemId);

}
