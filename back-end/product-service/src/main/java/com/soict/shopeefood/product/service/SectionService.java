package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Section;
import com.soict.shopeefood.product.payload.SectionForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface SectionService {

    Optional<Section> findById(Integer sectionId);

    List<Section> findAll();

    List<Section> findByShop(Integer shopId);

    Optional<Section> upload(SectionForm sectionForm);

    Optional<Section> update(SectionForm sectionForm);

    boolean deleteById(Integer idProd);

}
