package com.soict.shopeefood.order.service.impl;

import com.soict.shopeefood.order.entity.Sales;
import com.soict.shopeefood.order.repo.OrdersRepo;
import com.soict.shopeefood.order.repo.SalesRepo;
import com.soict.shopeefood.order.repo.StatusRepo;
import com.soict.shopeefood.order.service.SalesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalesServiceImpl implements SalesService {

    private static final Logger LOGGER = LoggerFactory.getLogger(SalesServiceImpl.class);

    @Autowired
    private SalesRepo salesRepo;

    @Override
    public List<Sales> findByOrder(Integer orderId) {
        try {
            return salesRepo.findByOrderId(orderId);
        } catch (Exception ex) {
            LOGGER.error("findByShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

}

