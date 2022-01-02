package com.soict.shopeefood.order.service;

import com.soict.shopeefood.order.entity.Sales;

import java.util.List;

public interface SalesService {

    List<Sales> findByOrder(Integer orderId);

}
