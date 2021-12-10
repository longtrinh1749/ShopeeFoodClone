package com.soict.shopeefood.user.service;

import com.soict.shopeefood.user.entity.Profile;

public interface ProfileService {

    Profile getProfile(Long userId);

    Profile register(Profile profile);

    Profile update(Profile profile);
}
