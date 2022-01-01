package com.soict.shopeefood.order.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "order_service", name = "voucher")
public class Voucher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer voucherId;

    @Column(name = "code")
    private String voucherCode;

    @Column(name = "discount")
    private BigDecimal discount;

    @Column(name = "limit_price")
    private BigDecimal limitPrice;

    @Column(name = "description")
    private String description;

    @Column(name = "expired")
    private Timestamp expired;
}
