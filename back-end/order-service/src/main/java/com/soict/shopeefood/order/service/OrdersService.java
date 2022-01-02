package com.soict.shopeefood.order.service;

import com.soict.shopeefood.order.entity.Orders;
import com.soict.shopeefood.order.payload.OrderForm;
import com.soict.shopeefood.order.payload.OrderUpdateForm;

import java.util.List;
import java.util.Optional;

public interface OrdersService {

    List<Orders> findAll();

    Optional<Orders> findById(Integer orderId);

    Optional<Orders> findFullInfoById(Integer orderId);

    List<Orders> findByShop(Integer shopId);

    List<Orders> findByCustomer(Integer customerId);

    List<Orders> findByStatus(Integer statusId);

    List<Orders> findByShipper(Integer shipperId);

    List<Orders> findByStatusAndDistrict(Integer statusId, String district);

    List<Orders> findByStatusAndShop(Integer statusId, Integer shopId);

    List<Orders> findByStatusAndCustomer(Integer statusId, Integer customerId);

    List<Orders> findByStatusAndShipper(Integer statusId, Integer shipperId);

    List<Orders> findByShipperAndDistrict(Integer shipperId, String district);

    List<Orders> findByShipperAndDistrictAndStatus(Integer shipperId, String district, Integer statusId);

    Optional<Orders> upload(OrderForm orderForm);

    Optional<Orders> update(OrderUpdateForm orderUpdateForm);

}
