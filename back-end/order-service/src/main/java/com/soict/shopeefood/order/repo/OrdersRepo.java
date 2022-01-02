package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.Orders;
import com.soict.shopeefood.order.entity.SalesId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrdersRepo extends JpaRepository<Orders, Integer> {

    @Query(value = "select s from Orders s ORDER BY s.orderAt desc, s.status.statusId asc ")
    List<Orders> findAll();

    @Query(value = "select o from Orders o where o.orderId = ?1")
    Optional<Orders> findById(Integer orderId);

    @Query(value = "select s from Orders s where s.shopId = ?1 ORDER BY s.orderAt desc, s.status.statusId asc ")
    List<Orders> findByShop(Integer shopId);

    @Query(value = "select s from Orders s where s.customerId = ?1 order by s.orderAt desc, s.status.statusId asc ")
    List<Orders> findByCustomer(Integer customerId);

    @Query(value = "select s from Orders s where s.status.statusId = ?1 order by s.orderAt desc ")
    List<Orders> findByStatus(Integer statusId);

    @Query(value = "select s from Orders s where s.shipperId = ?1 order by s.orderAt desc, s.status.statusId asc ")
    List<Orders> findByShipper(Integer shipperId);

    @Query(value = "select s from Orders s where s.status.statusId = :statusId and s.deliveryDistrict like %:district% order by s.orderAt desc ")
    List<Orders> findByStatusAndDistrict(@Param("statusId") Integer statusId, @Param("district") String district);

    @Query(value = "select s from Orders s where s.status.statusId = ?1 and s.shopId = ?2 order by s.orderAt desc ")
    List<Orders> findByStatusAndShop(Integer statusId, Integer shopId);

    @Query(value = "select s from Orders s where s.status.statusId = ?1 and s.customerId = ?2 order by s.orderAt desc ")
    List<Orders> findByStatusAndCustomer(Integer statusId, Integer customerId);

    @Query(value = "select s from Orders s where s.status.statusId = ?1 and s.shipperId = ?2 order by s.orderAt desc ")
    List<Orders> findByStatusAndShipper(Integer statusId, Integer shipperId);

    @Query(value = "select s from Orders s where s.shipperId = :shipperId and s.deliveryDistrict like %:district% order by s.orderAt desc ")
    List<Orders> findByShipperAndDistrict(@Param("shipperId") Integer shipperId, @Param("district") String district);

    @Query(value = "select s from Orders s where s.shipperId = :shipperId and s.deliveryDistrict like %:district% and s.status.statusId = :statusId order by s.orderAt desc ")
    List<Orders> findByShipperAndDistrictAndStatus(@Param("shipperId") Integer shipperId, @Param("district") String district, @Param("statusId") Integer statusId);

}
