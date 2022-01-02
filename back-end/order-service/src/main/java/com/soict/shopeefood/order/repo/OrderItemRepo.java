package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.OrderItem;
import com.soict.shopeefood.order.entity.OrderItemId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemRepo extends JpaRepository<OrderItem, Integer> {

    @Query(value = "select s from OrderItem s where s.orderItemId.orderId = ?1")
    List<OrderItem> findByOrderId(Integer orderId);

    @Query(value = "select s from OrderItem s where s.itemId = ?1")
    List<OrderItem> findByItemId(Integer itemId);

}
