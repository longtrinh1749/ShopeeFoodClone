package com.soict.shopeefood.order.service.impl;

import com.soict.shopeefood.order.entity.Order;
import com.soict.shopeefood.order.entity.OrderItem;
import com.soict.shopeefood.order.entity.OrderItemId;
import com.soict.shopeefood.order.entity.Status;
import com.soict.shopeefood.order.payload.OrderForm;
import com.soict.shopeefood.order.payload.OrderUpdateForm;
import com.soict.shopeefood.order.repo.OrderItemRepo;
import com.soict.shopeefood.order.repo.OrderRepo;
import com.soict.shopeefood.order.repo.StatusRepo;
import com.soict.shopeefood.order.service.OrderService;
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
public class OrderServiceImpl implements OrderService {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrderServiceImpl.class);

    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private StatusRepo statusRepo;

    @Autowired
    private OrderItemRepo orderItemRepo;

    @Override
    public Optional<Order> findById(Integer orderId) {
        try {
            return orderRepo.findById(orderId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Order> findFullInfoById(Integer orderId) {
        try {
            return orderRepo.findById(orderId)
                    .map(order -> {
                        order.setOrderItemList(orderItemRepo.findByOrderId(orderId));
                        return Optional.of(order);
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("findFullInfoById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Order> findAll() {
        try {
            return orderRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByShop(Integer shopId) {
        try {
            return orderRepo.findByShop(shopId);
        } catch (Exception ex) {
            LOGGER.error("findByShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByCustomer(Integer customerId) {
        try {
            return orderRepo.findByCustomer(customerId);
        } catch (Exception ex) {
            LOGGER.error("findByCustomer error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByStatus(Integer statusId) {
        try {
            return orderRepo.findByStatus(statusId);
        } catch (Exception ex) {
            LOGGER.error("findByStatus error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByShipper(Integer shipperId) {
        try {
            return orderRepo.findByShipper(shipperId);
        } catch (Exception ex) {
            LOGGER.error("findByShipper error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByStatusAndDistrict(Integer statusId, String district) {
        try {
            return orderRepo.findByStatusAndDistrict(statusId, district);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndDistrict error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByStatusAndShop(Integer statusId, Integer shopId) {
        try {
            return orderRepo.findByStatusAndShop(statusId, shopId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndShop error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByStatusAndCustomer(Integer statusId, Integer customerId) {
        try {
            return orderRepo.findByStatusAndCustomer(statusId, customerId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndCustomer error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByStatusAndShipper(Integer statusId, Integer shipperId) {
        try {
            return orderRepo.findByStatusAndShipper(statusId, shipperId);
        } catch (Exception ex) {
            LOGGER.error("findByStatusAndShipper error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByShipperAndDistrict(Integer shipperId, String district) {
        try {
            return orderRepo.findByShipperAndDistrict(shipperId, district);
        } catch (Exception ex) {
            LOGGER.error("findByShipperAndDistrict error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Order> findByShipperAndDistrictAndStatus(Integer shipperId, String district, Integer statusId) {
        try {
            return orderRepo.findByShipperAndDistrictAndStatus(shipperId, district, statusId);
        } catch (Exception ex) {
            LOGGER.error("findByShipperAndDistrictAndStatus error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Order> update(OrderUpdateForm sf) {
        try {
            return statusRepo.findById(sf.getStatusId())
                    .map(status -> {
                        return orderRepo.findById(sf.getOrderId())
                                .map(order -> {
                                    order.setDeliveryAt(sf.getDeliveryAt());
                                    order.setShipperId(sf.getShipperId());
                                    order.setStatus(status);
                                    return Optional.ofNullable(orderRepo.save(order));
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
    public Optional<Order> upload(OrderForm sf) {
        try {
            Status status = statusRepo.findById(sf.getStatusId()).orElse(null);
            Order order = Order.builder()
                    .status(status)
                    .customerId(sf.getCustomerId())
                    .shopId(sf.getShopId())
                    .orderCode(UUID.randomUUID().toString())
                    .orderAt(sf.getOrderAt())
                    .deliveryAddress(sf.getDeliveryAddress())
                    .deliveryDistrict(sf.getDeliveryDistrict())
                    .note(sf.getNote())
                    .shippingFees(sf.getShippingFees())
                    .discount(sf.getDiscount())
                    .total(sf.getTotal())
                    .build();
            if (orderRepo.save(order) == null) throw new HibernateException("Can't add new Order");

            List<OrderItem> orderItemList = sf.getOrderItemList()
                    .stream()
                    .map(oi -> {
                        return OrderItem.builder()
                                .orderItemId(new OrderItemId(order.getOrderId()))
                                .order(order)
                                .itemId(oi.getItemId())
                                .quantity(oi.getQuantity())
                                .build();
                    })
                    .collect(Collectors.toList());
            if (orderItemRepo.saveAll(orderItemList) == null) throw new HibernateException("Can't add new OrderItem");

            order.setOrderItemList(orderItemList);

            return Optional.ofNullable(orderRepo.save(order));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
