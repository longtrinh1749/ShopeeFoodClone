package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.payload.ShopForm;
import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.DistrictService;
import com.soict.shopeefood.product.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/shop")
public class ShopPublicController {

    @Autowired
    private ShopService shopService;

    @Autowired
    private DistrictService districtService;


    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer shopId) {
        return shopService.findById(shopId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(shopService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findAllByPage(@RequestParam("page") Integer page,
                                                    @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        return Optional.ofNullable(shopService.findAllByPage(pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/filter")
    public ResponseEntity<JsonResult> findByDistrictAndCategory(@RequestParam("districtList") List<Integer> districtList,
                                                                @RequestParam("categoryList") List<Integer> categoryList,
                                                                @RequestParam("name") String name,
                                                                @RequestParam("page") Integer page,
                                                                @RequestParam("size") Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        if(categoryList.isEmpty() && districtList.isEmpty() && name.isEmpty()) {
            return Optional.ofNullable(shopService.findAllByPage(pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (categoryList.isEmpty() && districtList.isEmpty()) {
            return Optional.ofNullable(shopService.findByNameAndAddress(name, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (categoryList.isEmpty() && name.isEmpty()) {
            return Optional.ofNullable(shopService.findByDistrict(districtList, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (districtList.isEmpty() && name.isEmpty()) {
            return Optional.ofNullable(shopService.findByCategory(categoryList, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (name.isEmpty()) {
            return Optional.ofNullable(shopService.findByDistrictAndCategory(districtList, categoryList, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (categoryList.isEmpty()) {
            return Optional.ofNullable(shopService.findByNameAndDistrict(districtList, name, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else if (districtList.isEmpty()) {
            return Optional.ofNullable(shopService.findByNameAndCategory(categoryList, name, pageable))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(shopService.findByNameAndFilter(districtList, categoryList, name, pageable))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("shop not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));

    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody ShopForm shopForm) {
        return districtService.findById(shopForm.getDistrictId())
                .map(section -> {
                    return shopService.upload(shopForm)
                            .map(JsonResult::uploaded)
                            .orElse(JsonResult.saveError("Internal Server Error"));
                })
                .orElse(JsonResult.parentNotFound("District doesn't exist"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody ShopForm shopForm) {
        return shopService.update(shopForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

}

