package com.soict.shopeefood.product.controller;

import com.soict.shopeefood.product.payload.ItemForm;
import com.soict.shopeefood.product.response.JsonResult;
import com.soict.shopeefood.product.service.ItemService;
import com.soict.shopeefood.product.service.SectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/item")
@CrossOrigin("*")
public class ItemPublicController {

    @Autowired
    private ItemService itemService;

    @Autowired
    private SectionService sectionService;


    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer itemId) {
        return itemService.findById(itemId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(itemService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Item not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/section")
    public ResponseEntity<JsonResult> findBySection(@RequestParam("secId") Integer sectionId) {
        return Optional.ofNullable(itemService.findBySection(sectionId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Category not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("/shop")
    public ResponseEntity<JsonResult> findByCategory(@RequestParam("shopId") Integer shopId) {
        return Optional.ofNullable(itemService.findByShop(shopId))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Category not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findByCategory(@RequestParam("shopId") Integer shopId,
                                                     @RequestParam("name") String name) {
        if(name.isEmpty()) {
            return Optional.ofNullable(itemService.findByShop(shopId))
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Product not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(itemService.findByName(shopId,name))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("Product not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody ItemForm itemForm) {
        return sectionService.findById(itemForm.getSectionId())
                .map(section -> {
                    return itemService.upload(itemForm)
                            .map(JsonResult::uploaded)
                            .orElse(JsonResult.saveError("Internal Server Error"));
                })
                .orElse(JsonResult.parentNotFound("Section doesn't exist"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody ItemForm itemForm) {
        return itemService.update(itemForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<JsonResult> deleteById(@PathVariable("id") Integer itemId) {
        if (itemService.deleteById(itemId)) {
            return JsonResult.deleted();
        }
        return JsonResult.saveError("Internal Server Error");
    }

}

