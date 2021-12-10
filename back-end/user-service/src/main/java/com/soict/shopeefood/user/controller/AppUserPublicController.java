package com.soict.shopeefood.user.controller;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;
import com.soict.shopeefood.user.repository.AppUserRepository;
import com.soict.shopeefood.user.response.JsonResult;
import com.soict.shopeefood.user.service.AppUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/public")
@Slf4j
public class AppUserPublicController {

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    AppUserService appUserService;

    @PostMapping(value = "/register", consumes = {"multipart/form-data", "application/json"})
    public ResponseEntity<JsonResult> register(@RequestBody RegisterForm registerForm) {
        log.info("Register new account {}", registerForm.getUsername());
        if (appUserService.checkUsernameExisted(registerForm.getUsername()))
            return ResponseEntity.ok(JsonResult.build("Register failed", "Username existed"));
        AppUser appUser = appUserService.register(registerForm);
        if (appUser != null) {
            appUser.setPassword(null);
            return ResponseEntity.ok(JsonResult.build("Register succeed", appUser));
        }
        return ResponseEntity.badRequest().build();
    }
}
