package com.soict.shopeefood.user.service;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;

import java.util.List;
import java.util.Optional;

public interface AppUserService {

    AppUser register(RegisterForm registerForm);

    Boolean checkUsernameExisted(String username);

    AppUser getUserByToken(String authenToken);

    List<AppUser> getUsers();

    List<AppUser> findByRole(String role);

    AppUser findById(int id);
}
