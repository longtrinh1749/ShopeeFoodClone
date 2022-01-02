package com.soict.shopeefood.order.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItemForm {
    private int itemId;
    private int quantity;
}
