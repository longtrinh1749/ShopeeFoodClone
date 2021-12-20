package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.payload.SectionForm;
import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.SectionService;
import com.soict.shopeefood.product.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/section")
@CrossOrigin("*")
public class SectionPublicController {

    @Autowired
    private ShopService shopService;

    @Autowired
    private SectionService sectionService;


    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer sectionId) {
        return sectionService.findById(sectionId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(sectionService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("section not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/shop")
    public ResponseEntity<JsonResult> findBySection(@RequestParam("shopId") Integer shopId) {
        return Optional.ofNullable(sectionService.findByShop(shopId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("section not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody SectionForm sectionForm) {
        return shopService.findById(sectionForm.getShopId())
                .map(section -> {
                    return sectionService.upload(sectionForm)
                            .map(JsonResult::uploaded)
                            .orElse(JsonResult.saveError("Internal Server Error"));
                })
                .orElse(JsonResult.parentNotFound("Shop doesn't exist"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody SectionForm sectionForm) {
        return sectionService.update(sectionForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<JsonResult> deleteById(@PathVariable("id") Integer sectionId) {
        if (sectionService.deleteById(sectionId)) {
            return JsonResult.deleted();
        }
        return JsonResult.saveError("Internal Server Error");
    }

}

