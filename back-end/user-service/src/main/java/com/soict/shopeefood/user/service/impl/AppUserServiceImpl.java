package com.soict.shopeefood.user.service.impl;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;
import com.soict.shopeefood.user.repository.AppUserRepository;
import com.soict.shopeefood.user.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    BCryptPasswordEncoder encoder;

    @Override
    public AppUser register(RegisterForm registerForm) {
        try {
            AppUser appUser = new AppUser();
            appUser.setUsername(registerForm.getUsername());
            appUser.setPassword(encoder.encode(registerForm.getPassword()));
            appUser.setRole(registerForm.getRole());
            return appUserRepository.save(appUser);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Boolean checkUsernameExisted(String username) {
        try {
            return appUserRepository.isUsernameExisted(username);
        } catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }
}
