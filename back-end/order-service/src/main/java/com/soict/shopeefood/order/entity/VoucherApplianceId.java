package com.soict.shopeefood.order.entity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class VoucherApplianceId implements Serializable {

    @Column(name = "voucher_id")
    private Integer voucherId;


}
