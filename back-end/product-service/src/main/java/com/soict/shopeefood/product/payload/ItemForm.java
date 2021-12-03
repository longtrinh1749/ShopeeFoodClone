package com.soict.shopeefood.product.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemForm {
    private Integer itemId;
    private String itemName;
    private String imgUrl;
    private String description;
    private BigDecimal price;
    private Integer sale;
    private Boolean deleted;
    private Integer sectionId;
}
