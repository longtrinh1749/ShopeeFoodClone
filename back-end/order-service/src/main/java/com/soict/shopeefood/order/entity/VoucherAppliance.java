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
@Table(schema = "order_service", name = "voucher_appliance")
public class VoucherAppliance {

    @Id
    @ManyToOne
    @JoinColumn(name = "voucher_id")
    private Voucher voucher;

    @Id
    @Column(name = "apply_type")
    private String applyType;

    @Id
    @Column(name = "apply_to_id")
    private Integer applyToId;

}
