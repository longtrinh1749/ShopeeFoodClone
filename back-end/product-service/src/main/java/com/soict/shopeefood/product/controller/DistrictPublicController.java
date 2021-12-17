package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.payload.DistrictForm;
import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.DistrictService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/district")
@CrossOrigin("*")
public class DistrictPublicController {

    @Autowired
    private DistrictService districtService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer districtId) {
        return districtService.findById(districtId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(districtService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("district not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findBySection(@RequestParam("name") String name) {
        if(name.isEmpty()) {
            return Optional.ofNullable(districtService.findAll())
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("district not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(districtService.findByName(name))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("district not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody DistrictForm districtForm) {
        return districtService.upload(districtForm)
                .map(JsonResult::uploaded)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody DistrictForm districtForm) {
        return districtService.update(districtForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

}

