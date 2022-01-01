package com.soict.shopeefood.order.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "order_service", name = "order_item")
public class OrderItem {

    @Id
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;

    @Id
    @Column(name = "item_id")
    private Integer itemId;

    @Column(name = "quantity")
    private Integer quantity;

}
