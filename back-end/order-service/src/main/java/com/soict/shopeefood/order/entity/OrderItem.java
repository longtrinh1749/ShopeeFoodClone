package com.soict.shopeefood.order.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(schema = "order_service", name = "order_item")
public class OrderItem implements Serializable {

    @EmbeddedId
    private OrderItemId orderItemId;

    @ManyToOne(optional = false)
    @MapsId("orderId")
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Order order;

    @Id
    @Column(name = "item_id")
    private Integer itemId;

    @Column(name = "quantity")
    private Integer quantity;

}
