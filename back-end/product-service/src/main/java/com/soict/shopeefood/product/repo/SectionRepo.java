package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface SectionRepo extends JpaRepository<Section, Integer> {

    @Query(value = "select s from Section s where s.sectionId = ?1")
    Optional<Section> findById(Integer sectionId);

    @Query(value = "select s from Section s ")
    List<Section> findAll();

    @Query(value = "select s from Section s where s.shop.shopId = ?1")
    List<Section> findByShop(Integer shopId);

    @Modifying
    @Transactional
    @Query(value = "update Section s set s.deleted = true where s.sectionId = ?1")
    int deleteBySectionId(Integer sectionId);

}