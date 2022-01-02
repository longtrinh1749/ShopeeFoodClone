package com.soict.shopeefood.order.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderForm {
    private Integer orderId;
    private Integer statusId;
    private Integer customerId;
    private Integer shopId;
    private Timestamp orderAt;
    private String deliveryAddress;
    private String deliveryDistrict;
    private String note;
    private BigDecimal shippingFees;
    private BigDecimal discount;
    private BigDecimal total;
    private List<OrderItemForm> orderItemList;
}
