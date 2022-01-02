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
@Table(schema = "order_service", name = "sales")
public class Sales {

    @EmbeddedId
    private SalesId salesId;

    @JsonIgnore
    @MapsId("orderId")
    @ManyToOne(optional = false)
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    private Orders order;

    @Column(name = "quantity")
    private Integer quantity;

}
