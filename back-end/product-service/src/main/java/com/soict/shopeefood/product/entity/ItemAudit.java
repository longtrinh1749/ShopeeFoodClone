package com.soict.shopeefood.product.entity;

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
@Table( schema = "product_service", name = "item_audit")
public class ItemAudit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer itemAuditId;

    @Column(name = "price")
    private BigDecimal price;

    @Column(name = "sale")
    private Integer sale;

    @Column(name = "update_at")
    private Timestamp updateAt;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

}
