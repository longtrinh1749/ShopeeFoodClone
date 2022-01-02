package com.soict.shopeefood.order.controller;

import com.soict.shopeefood.order.payload.OrderForm;
import com.soict.shopeefood.order.payload.OrderUpdateForm;
import com.soict.shopeefood.order.response.JsonResult;
import com.soict.shopeefood.order.service.OrderService;
import com.soict.shopeefood.order.service.StatusService;
import com.soict.shopeefood.order.service.external.AppUserService;
import com.soict.shopeefood.order.service.external.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/order")
@CrossOrigin("*")
public class OrderPublicController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private StatusService statusService;

    @Autowired
    private ProductService productService;

    @Autowired
    private AppUserService appUserService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer orderId) {
        return orderService.findById(orderId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(orderService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("order not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/full-info/{id}")
    public ResponseEntity<JsonResult> findAllByPage(@PathVariable("id") Integer orderId) {
        return orderService.findFullInfoById(orderId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/shipper/{id}")
    public ResponseEntity<JsonResult> findByShipperId(@PathVariable("id") Integer shipperId) {
        return Optional.ofNullable(orderService.findByShipper(shipperId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("order not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/shop/{id}")
    public ResponseEntity<JsonResult> findByShopId(@PathVariable("id") Integer shopId) {
        return Optional.ofNullable(orderService.findByShop(shopId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("order not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/customer/{id}")
    public ResponseEntity<JsonResult> findByCustomerId(@PathVariable("id") Integer customerId) {
        return Optional.ofNullable(orderService.findByCustomer(customerId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("order not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/status/{id}")
    public ResponseEntity<JsonResult> findByStatusId(@PathVariable("id") Integer statusId) {
        return Optional.ofNullable(orderService.findByStatus(statusId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("order not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/status-district")
    public ResponseEntity<JsonResult> findByStatusAndDistrict(@RequestParam("statusId") Integer statusId,
                                                 @RequestParam("district") String district) {
        return Optional.ofNullable(orderService.findByStatusAndDistrict(statusId, district))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/status-shop")
    public ResponseEntity<JsonResult> findByStatusAndShop(@RequestParam("statusId") Integer statusId,
                                                          @RequestParam("shopId") Integer shopId) {
        return Optional.ofNullable(orderService.findByStatusAndShop(statusId, shopId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/status-customer")
    public ResponseEntity<JsonResult> findByStatusAndCustomer(@RequestParam("statusId") Integer statusId,
                                                              @RequestParam("customerId") Integer customerId) {
        return Optional.ofNullable(orderService.findByStatusAndCustomer(statusId, customerId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/status-shipper")
    public ResponseEntity<JsonResult> findByStatusAndShipper(@RequestParam("statusId") Integer statusId,
                                                              @RequestParam("shipperId") Integer shipperId) {
        return Optional.ofNullable(orderService.findByStatusAndShipper(statusId, shipperId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/shipper-district")
    public ResponseEntity<JsonResult> findByShipperAndDistrict(@RequestParam("shipperId") Integer shipperId,
                                                              @RequestParam("district") String district) {
        return Optional.ofNullable(orderService.findByShipperAndDistrict(shipperId, district))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/shipper-district-status")
    public ResponseEntity<JsonResult> findByShipperAndDistrictAndStatus(@RequestParam("shipperId") Integer shipperId,
                                                                        @RequestParam("district") String district,
                                                                        @RequestParam("statusId") Integer statusId) {
        return Optional.ofNullable(orderService.findByShipperAndDistrictAndStatus(shipperId, district, statusId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("voucher not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }


    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody OrderForm orderForm) {
        return statusService.findById(orderForm.getStatusId())
                .map(status -> {
                    return appUserService.getUserById(orderForm.getCustomerId())
                            .map(cus -> {
                                return productService.getShopById(orderForm.getShopId())
                                        .map(shop -> {
                                            return orderService.upload(orderForm)
                                                    .map(JsonResult::uploaded)
                                                    .orElse(JsonResult.saveError("Internal Server Error"));
                                        })
                                        .orElse(JsonResult.parentNotFound("order shop doesn't exist"));

                            })
                            .orElse(JsonResult.parentNotFound("order customer doesn't exist"));
                })
                .orElse(JsonResult.parentNotFound("Status doesn't exist"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody OrderUpdateForm orderUpdateForm) {
        return appUserService.getUserById(orderUpdateForm.getShipperId())
                .map(shipper -> {
                    return orderService.update(orderUpdateForm)
                            .map(JsonResult::updated)
                            .orElse(JsonResult.saveError("Internal Server Error"));
                })
                .orElse(JsonResult.parentNotFound("shipper doesn't exist"));
    }

}

