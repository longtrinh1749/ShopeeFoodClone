package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Integer> {

    @Query(value = "select c from Category c where c.catId = :id")
    Optional<Category> findById(@Param("id") Integer catId);

    @Query(value = "select c from Category c")
    Page<Category> findAllByPage(Pageable pageable);

    @Query(value = "select c from Category c where c.catName like %:name%")
    Page<Category> findByCategoryName(@Param("name") String name, Pageable pageable);

    @Query(value = "select c from Category c where c.catName = :name")
    Optional<Category> findExistedCategory(@Param("name") String name);

}
