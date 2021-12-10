package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.District;
import com.soict.shopeefood.product.payload.DistrictForm;
import com.soict.shopeefood.product.repo.DistrictRepo;
import com.soict.shopeefood.product.service.DistrictService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DistrictServiceImpl implements DistrictService {

    private static final Logger LOGGER = LoggerFactory.getLogger(DistrictServiceImpl.class);

    @Autowired
    private DistrictRepo districtRepo;

    @Override
    public Optional<District> findById(Integer districtId) {
        try {
            return districtRepo.findById(districtId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<District> findAll() {
        try {
            return districtRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<District> findByName(String name) {
        try {
            return districtRepo.findByName(name);
        } catch (Exception ex) {
            LOGGER.error("findByName error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<District> update(DistrictForm df) {
        try {
            return districtRepo.findById(df.getDistrictId())
                    .map(district -> {
                        district.setDistrictName(df.getDistrictName());
                        district.setCity(df.getCity());
                        return Optional.ofNullable(districtRepo.save(district));
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<District> upload(DistrictForm df) {
        try {
            District district = District.builder()
                    .districtName(df.getDistrictName())
                    .city(df.getCity())
                    .build();
            return Optional.ofNullable(districtRepo.save(district));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
