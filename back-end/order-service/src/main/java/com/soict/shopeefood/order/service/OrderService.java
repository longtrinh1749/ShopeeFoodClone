package com.soict.shopeefood.order.service;

import com.soict.shopeefood.order.entity.Order;
import com.soict.shopeefood.order.payload.OrderForm;
import com.soict.shopeefood.order.payload.OrderUpdateForm;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    List<Order> findAll();

    Optional<Order> findById(Integer orderId);

    Optional<Order> findFullInfoById(Integer orderId);

    List<Order> findByShop(Integer shopId);

    List<Order> findByCustomer(Integer customerId);

    List<Order> findByStatus(Integer statusId);

    List<Order> findByShipper(Integer shipperId);

    List<Order> findByStatusAndDistrict(Integer statusId, String district);

    List<Order> findByStatusAndShop(Integer statusId, Integer shopId);

    List<Order> findByStatusAndCustomer(Integer statusId, Integer customerId);

    List<Order> findByStatusAndShipper(Integer statusId, Integer shipperId);

    List<Order> findByShipperAndDistrict(Integer shipperId, String district);

    List<Order> findByShipperAndDistrictAndStatus(Integer shipperId, String district, Integer statusId);

    Optional<Order> upload(OrderForm orderForm);

    Optional<Order> update(OrderUpdateForm orderUpdateForm);

}
