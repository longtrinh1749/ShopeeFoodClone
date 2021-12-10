package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.Category;
import com.soict.shopeefood.product.payload.CategoryForm;
import com.soict.shopeefood.product.repo.CategoryRepo;
import com.soict.shopeefood.product.service.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CategoryServiceImpl.class);

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public Optional<Category> findById(Integer catId) {
        try {
            return categoryRepo.findById(catId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Category> findAll() {
        try {
            return categoryRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Category> findByName(String name) {
        try {
            return categoryRepo.findByName(name);
        } catch (Exception ex) {
            LOGGER.error("findByName error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Category> update(CategoryForm cf) {
        try {
            return categoryRepo.findById(cf.getCatId())
                    .map(cat -> {
                        cat.setCatName(cf.getCatName());
                        return Optional.ofNullable(categoryRepo.save(cat));
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Category> upload(CategoryForm cf) {
        try {
            Category cat = Category.builder()
                    .catName(cf.getCatName())
                    .build();
            return Optional.ofNullable(categoryRepo.save(cat));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
