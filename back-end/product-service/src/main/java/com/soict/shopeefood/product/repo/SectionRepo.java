package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SectionRepo extends JpaRepository<Section, Integer> {

    @Query(value = "select s from Section s where s.sectionId = ?1")
    Optional<Section> findById(Integer sectionId);

    @Query(value = "select s from Section s order by s.sectionName asc")
    List<Section> findAll();

    @Query(value = "select s from Section s where s.shop.shopId = ?1")
    List<Section> findByShop(Integer shopId);

}