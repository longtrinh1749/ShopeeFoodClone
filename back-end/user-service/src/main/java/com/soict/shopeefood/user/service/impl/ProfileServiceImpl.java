package com.soict.shopeefood.user.service.impl;

import com.soict.shopeefood.user.entity.Profile;
import com.soict.shopeefood.user.repository.ProfileRepository;
import com.soict.shopeefood.user.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    ProfileRepository profileRepository;

    @Override
    public Profile getProfile(Long userId) {
        try {
            return profileRepository.getOne(userId);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Profile register(Profile profile) {
        try {
            return profileRepository.save(profile);
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Profile update(Profile profile) {
        try {
            return profileRepository.save(profile);
        } catch(Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
