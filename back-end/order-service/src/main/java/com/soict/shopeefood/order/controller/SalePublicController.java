package com.soict.shopeefood.order.controller;

import com.soict.shopeefood.order.response.JsonResult;
import com.soict.shopeefood.order.service.SalesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/sale")
@CrossOrigin("*")
public class SalePublicController {

    @Autowired
    private SalesService salesService;

    @GetMapping("/order/{id}")
    public ResponseEntity<JsonResult> findByOrder(@PathVariable("id") Integer orderId) {
        return Optional.ofNullable(salesService.findByOrder(orderId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("sales not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

}

