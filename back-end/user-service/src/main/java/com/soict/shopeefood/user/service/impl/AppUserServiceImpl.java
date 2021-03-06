package com.soict.shopeefood.user.service.impl;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.entity.Profile;
import com.soict.shopeefood.user.payload.RegisterForm;
import com.soict.shopeefood.user.repository.AppUserRepository;
import com.soict.shopeefood.user.repository.ProfileRepository;
import com.soict.shopeefood.user.service.AppUserService;
import com.soict.shopeefood.user.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AppUserServiceImpl implements AppUserService {

    @Autowired
    AppUserRepository appUserRepository;

    @Autowired
    ProfileService profileService;

    @Autowired
    BCryptPasswordEncoder encoder;

    @Override
    public AppUser register(RegisterForm registerForm) { // TODO: add transaction
        try {
            AppUser appUser = new AppUser();
            appUser.setUsername(registerForm.getUsername());
            appUser.setPassword(encoder.encode(registerForm.getPassword()));
            appUser.setRole(registerForm.getRole());
            Profile profile = new Profile();
            profile.setName(registerForm.getName());
            profile.setGender(registerForm.getGender());
            profile.setAvatarImgUrl(registerForm.getAvatarImg());
            profile.setAddress(registerForm.getAddress());
            profile.setCity(registerForm.getCity());
            profile.setDistrict(registerForm.getDistrict());
            profile.setEmail(registerForm.getEmail());
            profile.setPhone(registerForm.getPhone());
            profile.setUser(appUser);
            profileService.register(profile);
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

    @Override
    public AppUser getUserByToken(String authenToken) {
        try {
            return appUserRepository.findAllByAuthenToken(authenToken).get(0);
        } catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<AppUser> getUsers() {
        try {
            return appUserRepository.findAll();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public List<AppUser> findByRole(String role) {
        try {
            return appUserRepository.findAllByRole(role);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public AppUser findById(int id) {
        try {
            long id_long = id;
            return appUserRepository.getById(id_long).get(0);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

}
