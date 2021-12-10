package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Category;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

    @Query(value = "select c from Category c where c.catId = :id")
    Optional<Category> findById(@Param("id") Integer catId);

    @Query(value = "select c from Category c")
    List<Category> findAll();

    @Query(value = "select c from Category c where c.catName like %:name%")
    List<Category> findByName(@Param("name") String name);

    @Query(value = "select c from Category c where c.catId in :catList")
    List<Category> findByCatList(@Param("catList") List<Integer> catList);

}
