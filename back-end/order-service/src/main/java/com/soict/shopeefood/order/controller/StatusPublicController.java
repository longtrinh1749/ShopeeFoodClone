package com.soict.shopeefood.order.controller;

import com.soict.shopeefood.order.payload.StatusForm;
import com.soict.shopeefood.order.response.JsonResult;
import com.soict.shopeefood.order.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("api/v1/public/status")
@CrossOrigin("*")
public class StatusPublicController {

    @Autowired
    private StatusService statusService;

    @GetMapping("/{id}")
    public ResponseEntity<JsonResult> findById(@PathVariable("id") Integer statusId) {
        return statusService.findById(statusId)
                .map(JsonResult::found)
                .orElse(JsonResult.idNotFound());
    }

    @GetMapping("/all")
    public ResponseEntity<JsonResult> findAll() {
        return Optional.ofNullable(statusService.findAll())
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("status not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @GetMapping("")
    public ResponseEntity<JsonResult> findByName(@RequestParam("name") String name) {
        if(name.isEmpty()) {
            return Optional.ofNullable(statusService.findAll())
                    .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("status not found"))
                    .orElse(JsonResult.serverError("Internal Server Error"));
        } else return Optional.ofNullable(statusService.findByName(name))
                .map(rsList -> !rsList.isEmpty() ? JsonResult.found(rsList) : JsonResult.notFound("status not found"))
                .orElse(JsonResult.serverError("Internal Server Error"));
    }

    @PostMapping("/upload")
    public ResponseEntity<JsonResult> upload(@RequestBody StatusForm statusForm) {
        return statusService.upload(statusForm)
                .map(JsonResult::uploaded)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

    @PutMapping("/update")
    public ResponseEntity<JsonResult> update(@RequestBody StatusForm statusForm) {
        return statusService.update(statusForm)
                .map(JsonResult::updated)
                .orElse(JsonResult.saveError("Internal Server Error"));
    }

}

