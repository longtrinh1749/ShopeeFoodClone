package com.soict.shopeefood.product.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DistrictForm {
    private Integer districtId;
    private String districtName;
    private String city;

}
