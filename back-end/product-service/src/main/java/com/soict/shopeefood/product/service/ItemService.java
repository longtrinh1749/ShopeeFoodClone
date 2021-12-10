package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Item;
import com.soict.shopeefood.product.payload.ItemForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ItemService {

    Optional<Item> findById(Integer itemId);

    List<Item> findAll();

    List<Item> findByName(Integer shopId, String name);

    List<Item> findBySection(Integer sectionId);

    List<Item> findByShop(Integer shopId);

    Optional<Item> upload(ItemForm ItemForm);

    Optional<Item> update(ItemForm ItemForm);

    boolean deleteById(Integer idProd);
}
