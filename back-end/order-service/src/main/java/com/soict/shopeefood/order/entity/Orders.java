package com.soict.shopeefood.order.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "order_service", name = "order")
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer orderId;

    @Column(name = "customer_id")
    private Integer customerId;

    @Column(name = "shop_id")
    private Integer shopId;

    @Column(name = "shipper_id")
    private Integer shipperId;

    @Column(name = "code")
    private String code;

    @Column(name = "order_at")
    private Timestamp orderAt;

    @Column(name = "delivery_address")
    private String deliveryAddress;

    @Column(name = "delivery_district")
    private String deliveryDistrict;

    @Column(name = "delivery_at")
    private Timestamp deliveryAt;

    @Column(name = "note")
    private String note;

    @Column(name = "shipping_fees")
    private BigDecimal shippingFees;

    @Column(name = "discount")
    private BigDecimal discount;

    @Column(name = "total")
    private BigDecimal total;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private Status status;

    @Transient
    List<Sales> salesList = new ArrayList<>();

}
