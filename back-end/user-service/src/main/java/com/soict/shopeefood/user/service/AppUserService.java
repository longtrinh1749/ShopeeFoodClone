package com.soict.shopeefood.user.service;

import com.soict.shopeefood.user.entity.AppUser;
import com.soict.shopeefood.user.payload.RegisterForm;

public interface AppUserService {

    AppUser register(RegisterForm registerForm);

    Boolean checkUsernameExisted(String username);

    AppUser getUserByToken(String authenToken);
}
