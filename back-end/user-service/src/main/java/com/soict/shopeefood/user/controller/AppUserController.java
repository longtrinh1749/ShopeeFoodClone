package com.soict.shopeefood.user.controller;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.entity.Profile;
import com.soict.shopeefood.user.payload.RegisterForm;
import com.soict.shopeefood.user.payload.UpdateProfileForm;
import com.soict.shopeefood.user.repository.AppUserRepository;
import com.soict.shopeefood.user.response.JsonResult;
import com.soict.shopeefood.user.service.AppUserService;
import com.soict.shopeefood.user.service.ProfileService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/user")
@Slf4j
public class AppUserController {

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    AppUserService appUserService;

    @Autowired
    ProfileService profileService;

    @GetMapping(value = "")
    public ResponseEntity<JsonResult> getUser(@RequestHeader("Authorization") String authenToken) {
        log.info("Get account info");

        AppUser appUser = appUserService.getUserByToken(authenToken);
        Profile profile = null;
        if(appUser != null) profile = profileService.getProfile(appUser.getId());
        if(profile != null) {
            profile.setUser(null);
            return ResponseEntity.ok(JsonResult.build("Succeed", profile));
        }
        return ResponseEntity.badRequest().build();
    }

    @PostMapping(value = "", consumes = {"multipart/form-data", "application/json"})
    public ResponseEntity<JsonResult> updateUser(@RequestHeader("Authorization") String authenToken,
                                                 @RequestBody UpdateProfileForm updateProfileForm) {
        log.info("Update account info");

        AppUser appUser = appUserService.getUserByToken(authenToken);
        Profile profile = profileService.getProfile(appUser.getId());
        if(profile != null) {
            if(updateProfileForm.getName() != null) profile.setName(updateProfileForm.getName());
            if(updateProfileForm.getGender() != null) profile.setGender(updateProfileForm.getGender());
            if(updateProfileForm.getPhone() != null) profile.setPhone(updateProfileForm.getPhone());
            if(updateProfileForm.getAddress() != null) profile.setAddress(updateProfileForm.getAddress());
            if(updateProfileForm.getCity() != null) profile.setCity(updateProfileForm.getCity());
            if(updateProfileForm.getEmail() != null) profile.setEmail(updateProfileForm.getEmail());
            if(updateProfileForm.getDistrict() != null) profile.setDistrict(updateProfileForm.getDistrict());
            profileService.update(profile);
            profile.setUser(null);
            return ResponseEntity.ok(JsonResult.build("Succeed", profile));
        }
        return ResponseEntity.badRequest().build();
    }
}
