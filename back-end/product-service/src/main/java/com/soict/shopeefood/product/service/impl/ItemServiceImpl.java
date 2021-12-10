package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.Item;
import com.soict.shopeefood.product.entity.Section;
import com.soict.shopeefood.product.payload.ItemForm;
import com.soict.shopeefood.product.repo.SectionRepo;
import com.soict.shopeefood.product.service.ItemService;
import com.soict.shopeefood.product.repo.ItemRepo;
import com.soict.shopeefood.product.repo.ItemAuditRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImpl implements ItemService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ItemServiceImpl.class);

    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private SectionRepo sectionRepo;

    @Override
    public Optional<Item> findById(Integer itemId) {
        try {
            return itemRepo.findById(itemId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Item> findAll() {
        try {
            return itemRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Item> findByName(Integer shopId, String name) {
        try {
            return itemRepo.findByName(shopId, name);
        } catch (Exception ex) {
            LOGGER.error("findByName error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Item> findBySection(Integer sectionId) {
        try {
            return itemRepo.findBySection(sectionId);
        } catch (Exception ex) {
            LOGGER.error("findBySection error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Item> findByShop(Integer shopId) {
        try {
            return itemRepo.findByShop(shopId);
        } catch (Exception ex) {
            LOGGER.error("findByShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Item> update(ItemForm pf) {
        Date date = new Date();
        Timestamp now = new Timestamp(date.getTime());
        try {
            return sectionRepo.findById(pf.getSectionId())
                    .map(section -> {
                        return itemRepo.findById(pf.getItemId())
                                .map(item -> {
                                    item.setItemName(pf.getItemName());
                                    item.setImgUrl(pf.getImgUrl());
                                    item.setDescription(pf.getDescription());
                                    item.setPrice(pf.getPrice());
                                    item.setSale(pf.getSale());
                                    item.setDeleted(pf.getDeleted());
                                    item.setSection(section);
                                    return Optional.ofNullable(itemRepo.save(item));
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
    public Optional<Item> upload(ItemForm pf) {
        try {
            Section section = sectionRepo.findById(pf.getSectionId()).orElse(null);
            Item item = Item.builder()
                    .itemName(pf.getItemName())
                    .imgUrl(pf.getImgUrl())
                    .description(pf.getDescription())
                    .price(pf.getPrice())
                    .sale(pf.getSale())
                    .deleted(false)
                    .section(section)
                    .build();
            return Optional.ofNullable(itemRepo.save(item));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    @Transactional(rollbackOn = Exception.class)
    public boolean deleteById(Integer itemId) {
        try {
            return itemRepo.deleteByItemId(itemId) > 0;
        } catch (Exception ex) {
            LOGGER.error("deleteById error", ex);
            ex.printStackTrace();
            return false;
        }
    }


}
