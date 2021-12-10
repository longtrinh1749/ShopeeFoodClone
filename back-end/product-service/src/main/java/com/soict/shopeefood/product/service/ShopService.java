package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Shop;
import com.soict.shopeefood.product.payload.ShopForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ShopService {

    Optional<Shop> findById(Integer shopId);

    List<Shop> findAll();

    Page<Shop> findAllByPage(Pageable pageable);

    Page<Shop> findByNameAndAddress(String name, Pageable pageable);

    Page<Shop> findByDistrict(List<Integer> districtList, Pageable pageable);

    Page<Shop> findByCategory(List<Integer> categoryList, Pageable pageable);

    Page<Shop> findByNameAndCategory(List<Integer> categoryList, String name, Pageable pageable);

    Page<Shop> findByNameAndDistrict(List<Integer> districtList, String name, Pageable pageable);

    Page<Shop> findByDistrictAndCategory(List<Integer> districtList, List<Integer> categoryList, Pageable pageable);

    Page<Shop> findByNameAndFilter(List<Integer> districtList, List<Integer> categoryList, String name, Pageable pageable);

    Optional<Shop> upload(ShopForm shopForm);

    Optional<Shop> update(ShopForm shopForm);

}
