package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.District;
import com.soict.shopeefood.product.payload.DistrictForm;

import java.util.List;
import java.util.Optional;

public interface DistrictService {

    Optional<District> findById(Integer catId);

    List<District> findAll();

    List<District> findByName(String name);

    Optional<District> upload(DistrictForm districtForm);

    Optional<District> update(DistrictForm districtForm);

}
