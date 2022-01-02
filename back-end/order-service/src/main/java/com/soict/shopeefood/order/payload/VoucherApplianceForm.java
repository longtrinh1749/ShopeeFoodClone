package com.soict.shopeefood.order.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoucherApplianceForm {
    private Integer voucherId;
    private String applyType;
    private List<Integer> applyToIdList;
}
