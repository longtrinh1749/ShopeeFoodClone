package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.Item;
import com.soict.shopeefood.product.entity.Section;
import com.soict.shopeefood.product.entity.Shop;
import com.soict.shopeefood.product.payload.SectionForm;
import com.soict.shopeefood.product.repo.ItemRepo;
import com.soict.shopeefood.product.repo.SectionRepo;
import com.soict.shopeefood.product.repo.ShopRepo;
import com.soict.shopeefood.product.service.SectionService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SectionServiceImpl implements SectionService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SectionServiceImpl.class);

    @Autowired
    private SectionRepo sectionRepo;

    @Autowired
    private ShopRepo shopRepo;

    @Autowired
    private ItemRepo itemRepo;

    @Override
    public Optional<Section> findById(Integer sectionId) {
        try {
            return sectionRepo.findById(sectionId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Section> findAll() {
        try {
            return sectionRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Section> findByShop(Integer shopId) {
        try {
            return sectionRepo.findByShop(shopId);
        } catch (Exception ex) {
            LOGGER.error("findByShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Section> update(SectionForm sf) {
        try {
            return shopRepo.findById(sf.getShopId())
                    .map(shop -> {
                        return sectionRepo.findById(sf.getSectionId())
                                .map(section -> {
                                    section.setSectionName(sf.getSectionName());
                                    section.setDeleted(sf.getDeleted());
                                    section.setShop(shop);
                                    return Optional.ofNullable(sectionRepo.save(section));
                                })
                                .orElse(Optional.empty());
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Section> upload(SectionForm sf) {
        try {
            Shop shop = shopRepo.findById(sf.getShopId()).orElse(null);
            Section section = Section.builder()
                    .sectionName(sf.getSectionName())
                    .deleted(false)
                    .shop(shop)
                    .build();
            return Optional.ofNullable(sectionRepo.save(section));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public boolean deleteById(Integer sectionId) {
        try {
            List<Item> itemList = itemRepo.findBySection(sectionId)
                    .stream()
                    .map(item -> {
                        item.setDeleted(true);
                        return itemRepo.save(item);
                    })
                    .collect(Collectors.toList());
            return sectionRepo.deleteBySectionId(sectionId) > 0;
        } catch (Exception ex) {
            LOGGER.error("deleteById error", ex);
            ex.printStackTrace();
            return false;
        }
    }

}
