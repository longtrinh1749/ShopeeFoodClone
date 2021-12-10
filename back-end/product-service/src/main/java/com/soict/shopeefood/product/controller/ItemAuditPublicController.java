package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.ItemAuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/item-audit")
public class ItemAuditPublicController {

    @Autowired
    private ItemAuditService itemAuditService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer itemAuditId) {
        return itemAuditService.findById(itemAuditId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam("page") Integer page,
                                                    @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(itemAuditService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Item not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/item")
    public ResponseEntity<JsonResult> findByItemId(@RequestParam("itemId") Integer itemId) {
        return Optional.ofNullable(itemAuditService.findByItemId(itemId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Category not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/order")
    public ResponseEntity<JsonResult> findByOrderTime(@RequestParam("itemId") Integer itemId,
                                                     @RequestParam("orderTime") Timestamp orderTime) {
        return itemAuditService.findByOrderTime(itemId, orderTime)
                .map(JsonResult::found)
                .orElse(JsonResult.notFound("Item audit"));
    }

}

