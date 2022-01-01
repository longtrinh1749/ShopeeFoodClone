package com.soict.shopeefood.user.controller;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;
import com.soict.shopeefood.user.repository.AppUserRepository;
import com.soict.shopeefood.user.response.JsonResult;
import com.soict.shopeefood.user.service.AppUserService;
import com.soict.shopeefood.user.utils.Constants;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/v1/public")
@Slf4j
public class AppUserPublicController {

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    AppUserService appUserService;

    @PostMapping(value = "/register", consumes = {"multipart/form-data", "application/json", "application/x-www-form-urlencoded;charset=UTF-8", "text/plain;charset=UTF-8"})
    public ResponseEntity<JsonResult> register(@RequestBody RegisterForm registerForm) {
        log.info("Register new account {}", registerForm.getUsername());
        if   (!(Constants.ROLE_USER.equals(registerForm.getRole()) ||
                Constants.ROLE_DRIVER.equals(registerForm.getRole()) ||
                Constants.ROLE_SELLER.equals(registerForm.getRole())))
            return JsonResult.badRequest("Cannot register role");
        if (appUserService.checkUsernameExisted(registerForm.getUsername()))
            return ResponseEntity.ok(JsonResult.build("Register failed", "Username existed"));
        AppUser appUser = appUserService.register(registerForm);
        if (appUser != null) {
            appUser.setPassword(null);
            return ResponseEntity.ok(JsonResult.build("Register succeed", appUser));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping(value = "/users")
    public ResponseEntity<JsonResult> getUsers() {
        log.info("Get all users");
        List<AppUser> users = appUserService.getUsers();
        for (AppUser u: users) {
            u.setAuthenToken(null);
            u.setPassword(null);
            u.getProfile().setUser(null);
        }
        if (users != null) {
            return ResponseEntity.ok(JsonResult.build("Found", users));
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping(value = "/users-with-role")
    public ResponseEntity<JsonResult> getUsersByRole(@RequestParam("role") String role) {
        log.info("Get all users");
        List<AppUser> users = appUserService.getUsersByRole(role);
        for (AppUser u: users) {
            u.setAuthenToken(null);
            u.setPassword(null);
            u.getProfile().setUser(null);
        }
        if (users != null) {
            return ResponseEntity.ok(JsonResult.build("Found", users));
        }
        return ResponseEntity.badRequest().build();
    }
}
