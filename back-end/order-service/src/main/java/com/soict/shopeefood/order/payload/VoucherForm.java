package com.soict.shopeefood.order.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class VoucherForm {
    private Integer voucherId;
    private Integer voucherCode;
    private BigDecimal discount;
    private BigDecimal limitPrice;
    private String description;
    private Timestamp expired;
    private String applyType;
    private List<Integer> applyToIdList;
}
