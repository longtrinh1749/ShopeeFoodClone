package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.Item;
import com.soict.shopeefood.product.entity.ItemAudit;
import com.soict.shopeefood.product.repo.ItemAuditRepo;
import com.soict.shopeefood.product.repo.ItemRepo;
import com.soict.shopeefood.product.service.ItemAuditService;
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
public class ItemAuditServiceImpl implements ItemAuditService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ItemAuditServiceImpl.class);

    @Autowired
    private ItemRepo itemRepo;

    @Autowired
    private ItemAuditRepo itemAuditRepo;

    @Override
    public Optional<ItemAudit> findById(Integer itemAuditId) {
        try {
            return itemAuditRepo.findById(itemAuditId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Page<ItemAudit> findAllByPage(Pageable pageable) {
        try {
            return itemAuditRepo.findAllByPage(pageable);
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<ItemAudit> findByItemId(Integer itemId) {
        try {
            return itemAuditRepo.findByItemId(itemId);
        } catch (Exception ex) {
            LOGGER.error("findByItemId error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<ItemAudit> findByOrderTime(Integer itemId, Timestamp orderTime) {
        try {
            return itemAuditRepo.findByOrderTime(itemId, orderTime);
        } catch (Exception ex) {
            LOGGER.error("findByOrderTime error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }


}
