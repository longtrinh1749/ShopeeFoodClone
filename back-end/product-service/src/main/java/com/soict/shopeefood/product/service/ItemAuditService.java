package com.soict.shopeefood.product.service;

import com.soict.shopeefood.product.entity.Item;
import com.soict.shopeefood.product.entity.ItemAudit;
import com.soict.shopeefood.product.payload.ItemForm;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

public interface ItemAuditService {

    Optional<ItemAudit> findById(Integer itemAuditId);

    Page<ItemAudit> findAllByPage(Pageable pageable);

    List<ItemAudit> findByItemId(Integer itemId);

    Optional<ItemAudit> findByOrderTime(Integer itemId, Timestamp orderTime);

}
