package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.payload.CategoryForm;
import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/category")
public class CategoryPublicController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer catId) {
        return categoryService.findById(catId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(categoryService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("category not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findBySection(@RequestParam("name") String name) {
        if(name.isEmpty()) {
            return Optional.ofNullable(categoryService.findAll())
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Product not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(categoryService.findByName(name))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Product not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody CategoryForm categoryForm) {
        return categoryService.upload(categoryForm)
                .map(JsonResult::uploaded)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody CategoryForm categoryForm) {
        return categoryService.update(categoryForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

}

