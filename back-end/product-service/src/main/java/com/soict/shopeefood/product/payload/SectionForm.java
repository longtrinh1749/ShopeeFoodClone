package com.soict.shopeefood.product.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SectionForm {
    private Integer sectionId;
    private String sectionName;
    private Boolean deleted;
    private Integer shopId;
}
