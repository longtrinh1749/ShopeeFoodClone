package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.Sales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesRepo extends JpaRepository<Sales, Integer> {

    @Query(value = "select s from Sales s where s.order.orderId = ?1")
    List<Sales> findByOrderId(Integer orderId);

    @Query(value = "select s from Sales s where s.salesId.itemId = ?1")
    List<Sales> findByItemId(Integer itemId);

}
