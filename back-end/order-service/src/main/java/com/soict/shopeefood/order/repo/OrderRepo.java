package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

    @Query(value = "select o from Order o order by o.orderAt desc, o.status.statusId asc")
    List<Order> findAll();

    @Query(value = "select o from Order o where o.orderId = ?1")
    Optional<Order> findById(Integer orderId);

    @Query(value = "select o from Order o where o.shopId = ?1 order by o.orderAt desc, o.status.statusId asc")
    List<Order> findByShop(Integer shopId);

    @Query(value = "select o from Order o where o.customerId = ?1 order by o.orderAt desc, o.status.statusId asc")
    List<Order> findByCustomer(Integer customerId);

    @Query(value = "select o from Order o where o.status.statusId = ?1 order by o.orderAt desc")
    List<Order> findByStatus(Integer statusId);

    @Query(value = "select o from Order o where o.shipperId = ?1 order by o.orderAt desc, o.status.statusId asc")
    List<Order> findByShipper(Integer shipperId);

    @Query(value = "select o from Order o where o.status.statusId = :statusId and o.deliveryDistrict like %:district% order by o.orderAt desc")
    List<Order> findByStatusAndDistrict(@Param("statusId") Integer statusId, @Param("district") String district);

    @Query(value = "select o from Order o where o.status.statusId = ?1 and o.shopId = ?2 order by o.orderAt desc")
    List<Order> findByStatusAndShop(Integer statusId, Integer shopId);

    @Query(value = "select o from Order o where o.status.statusId = ?1 and o.customerId = ?2 order by o.orderAt desc")
    List<Order> findByStatusAndCustomer(Integer statusId, Integer customerId);

    @Query(value = "select o from Order o where o.status.statusId = ?1 and o.shipperId = ?2 order by o.orderAt desc")
    List<Order> findByStatusAndShipper(Integer statusId, Integer shipperId);

    @Query(value = "select o from Order o where o.shipperId = :shipperId and o.deliveryDistrict like %:district% order by o.orderAt desc")
    List<Order> findByShipperAndDistrict(@Param("shipperId") Integer shipperId, @Param("district") String district);

    @Query(value = "select o from Order o where o.shipperId = :shipperId and o.deliveryDistrict like %:district% and o.status.statusId = :statusId order by o.orderAt desc")
    List<Order> findByShipperAndDistrictAndStatus(@Param("shipperId") Integer shipperId, @Param("district") String district, @Param("statusId") Integer statusId);

}
