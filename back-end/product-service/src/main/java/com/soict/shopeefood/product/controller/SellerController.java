package com.soict.shopeefood.product.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/seller")
public class SellerController {

    @GetMapping("")
    public String welcome() {
        return "Api for Seller!";
    }

}


