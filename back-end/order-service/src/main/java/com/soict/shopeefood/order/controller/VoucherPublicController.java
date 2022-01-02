package com.soict.shopeefood.order.controller;

import com.soict.shopeefood.order.payload.VoucherForm;
import com.soict.shopeefood.order.response.JsonResult;
import com.soict.shopeefood.order.service.VoucherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/voucher")
@CrossOrigin("*")
public class VoucherPublicController {

    @Autowired
    private VoucherService voucherService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer voucherId) {
        return voucherService.findById(voucherId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(voucherService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findByName(@RequestParam("code") String code) {
        if(code.isEmpty()) {
            return Optional.ofNullable(voucherService.findAll())
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(voucherService.findByCode(code))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/applied")
    public ResponseEntity<JsonResult> findByName(@RequestParam("applyType") String applyType,
                                                 @RequestParam("applyToId") Integer applyToId) {
        return Optional.ofNullable(voucherService.findByApplyToId(applyType, applyToId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody VoucherForm voucherForm) {
        return voucherService.upload(voucherForm)
                .map(JsonResult::uploaded)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody VoucherForm voucherForm) {
        return voucherService.update(voucherForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

}

