package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Category;
import com.soict.shopeefood.product.payload.CategoryForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CategoryService {

    Optional<Category> findById(Integer catId);

    List<Category> findAll();

    List<Category> findByName(String name);

    Optional<Category> upload(CategoryForm categoryForm);

    Optional<Category> update(CategoryForm categoryForm);

}
