package com.soict.shopeefood.order.service.impl;

import com.soict.shopeefood.order.entity.Orders;
import com.soict.shopeefood.order.entity.Sales;
import com.soict.shopeefood.order.entity.SalesId;
import com.soict.shopeefood.order.entity.Status;
import com.soict.shopeefood.order.payload.OrderForm;
import com.soict.shopeefood.order.payload.OrderUpdateForm;
import com.soict.shopeefood.order.repo.OrdersRepo;
import com.soict.shopeefood.order.repo.SalesRepo;
import com.soict.shopeefood.order.repo.StatusRepo;
import com.soict.shopeefood.order.service.OrdersService;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class OrdersServiceImpl implements OrdersService {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrdersServiceImpl.class);

    @Autowired
    private OrdersRepo ordersRepo;

    @Autowired
    private StatusRepo statusRepo;

    @Autowired
    private SalesRepo salesRepo;

    @Override
    public Optional<Orders> findById(Integer orderId) {
        try {
            return ordersRepo.findById(orderId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Orders> findFullInfoById(Integer orderId) {
        try {
            return ordersRepo.findById(orderId)
                    .map(orders -> {
                        orders.setSalesList(salesRepo.findByOrderId(orderId));
                        return Optional.of(orders);
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("findFullInfoById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Orders> findAll() {
        try {
            return ordersRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByShop(Integer shopId) {
        try {
            return ordersRepo.findByShop(shopId);
        } catch (Exception ex) {
            LOGGER.error("findByShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByCustomer(Integer customerId) {
        try {
            return ordersRepo.findByCustomer(customerId);
        } catch (Exception ex) {
            LOGGER.error("findByCustomer error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByStatus(Integer statusId) {
        try {
            return ordersRepo.findByStatus(statusId);
        } catch (Exception ex) {
            LOGGER.error("findByStatus error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByShipper(Integer shipperId) {
        try {
            return ordersRepo.findByShipper(shipperId);
        } catch (Exception ex) {
            LOGGER.error("findByShipper error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByStatusAndDistrict(Integer statusId, String district) {
        try {
            return ordersRepo.findByStatusAndDistrict(statusId, district);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndDistrict error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByStatusAndShop(Integer statusId, Integer shopId) {
        try {
            return ordersRepo.findByStatusAndShop(statusId, shopId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByStatusAndCustomer(Integer statusId, Integer customerId) {
        try {
            return ordersRepo.findByStatusAndCustomer(statusId, customerId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndCustomer error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByStatusAndShipper(Integer statusId, Integer shipperId) {
        try {
            return ordersRepo.findByStatusAndShipper(statusId, shipperId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndShipper error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByShipperAndDistrict(Integer shipperId, String district) {
        try {
            return ordersRepo.findByShipperAndDistrict(shipperId, district);
        } catch (Exception ex) {
            LOGGER.error("findByShipperAndDistrict error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Orders> findByShipperAndDistrictAndStatus(Integer shipperId, String district, Integer statusId) {
        try {
            return ordersRepo.findByShipperAndDistrictAndStatus(shipperId, district, statusId);
        } catch (Exception ex) {
            LOGGER.error("findByShipperAndDistrictAndStatus error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Orders> update(OrderUpdateForm sf) {
        try {
            return statusRepo.findById(sf.getStatusId())
                    .map(status -> {
                        return ordersRepo.findById(sf.getOrderId())
                                .map(order -> {
                                    order.setDeliveryAt(sf.getDeliveryAt());
                                    order.setShipperId(sf.getShipperId());
                                    order.setStatus(status);
                                    return Optional.ofNullable(ordersRepo.save(order));
                                })
                                .orElse(Optional.empty());
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Orders> upload(OrderForm sf) {
        try {
            Status status = statusRepo.findById(sf.getStatusId()).orElse(null);
            Orders order = Orders.builder()
                    .status(status)
                    .customerId(sf.getCustomerId())
                    .shopId(sf.getShopId())
                    .code(UUID.randomUUID().toString())
                    .orderAt(sf.getOrderAt())
                    .deliveryAddress(sf.getDeliveryAddress())
                    .deliveryDistrict(sf.getDeliveryDistrict())
                    .note(sf.getNote())
                    .shippingFees(sf.getShippingFees())
                    .discount(sf.getDiscount())
                    .total(sf.getTotal())
                    .build();
            if (ordersRepo.save(order) == null) throw new HibernateException("Can't add new Orders");

            List<Sales> salesList = sf.getSaleFormList()
                    .stream()
                    .map(sale -> {
                        return Sales.builder()
                                .salesId(new SalesId(order.getOrderId()))
                                .order(order)
                                .itemId(sale.getItemId())
                                .quantity(sale.getQuantity())
                                .build();
                    })
                    .collect(Collectors.toList());
            if (salesRepo.saveAll(salesList) == null) throw new HibernateException("Can't add new OrdersItem");

            order.setSalesList(salesList);

            return Optional.ofNullable(ordersRepo.save(order));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}

