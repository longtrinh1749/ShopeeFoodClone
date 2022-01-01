package com.soict.shopeefood.user.service;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;

import java.util.List;

public interface AppUserService {

    AppUser register(RegisterForm registerForm);

    Boolean checkUsernameExisted(String username);

    AppUser getUserByToken(String authenToken);

    List<AppUser> getUsers();

    List<AppUser> getUsersByRole(String role);

    AppUser getUserById(int id);
}
