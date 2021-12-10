package com.soict.shopeefood.product.service.impl;

import com.soict.shopeefood.product.entity.*;
import com.soict.shopeefood.product.payload.ShopForm;
import com.soict.shopeefood.product.repo.CategoryRepo;
import com.soict.shopeefood.product.repo.DistrictRepo;
import com.soict.shopeefood.product.repo.ShopCategoryRepo;
import com.soict.shopeefood.product.repo.ShopRepo;
import com.soict.shopeefood.product.service.ShopService;
import org.hibernate.HibernateException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ShopServiceImpl implements ShopService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ShopServiceImpl.class);

    @Autowired
    private ShopRepo shopRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private DistrictRepo districtRepo;

    @Autowired
    private ShopCategoryRepo shopCategoryRepo;

    @Override
    public Optional<Shop> findById(Integer shopId) {
        try {
            return shopRepo.findById(shopId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Shop> findAll() {
        try {
            return shopRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findAllByPage(Pageable pageable) {
        try {
            return shopRepo.findAllByPage(pageable);
        } catch (Exception ex) {
            LOGGER.error("findAllByPage error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findByNameAndAddress(String name, Pageable pageable) {
        try {
            return shopRepo.findByNameAndAddress(name, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByName error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findByDistrict(List<Integer> districtList, Pageable pageable) {
        try {
            return shopRepo.findByDistrict(districtList, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByDistrict error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findByCategory(List<Integer> categoryList, Pageable pageable) {
        try {
            return shopRepo.findByCategory(categoryList, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByCategory error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findByDistrictAndCategory(List<Integer> districtList,
                                                List<Integer> categoryList,
                                                Pageable pageable) {
        try {
            return shopRepo.findByDistrictAndCategory(districtList, categoryList, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByDistrictAndCategory error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Page<Shop> findByNameAndCategory(List<Integer> categoryList,
                                            String name,
                                            Pageable pageable) {
        try {
            return shopRepo.findByNameAndCategory(categoryList, name, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByNameAndCategory error", ex);
            ex.printStackTrace();
            return null;
        }
    }
    @Override
    public Page<Shop> findByNameAndDistrict(List<Integer> districtList,
                                            String name,
                                            Pageable pageable) {
        try {
            return shopRepo.findByNameAndDistrict(districtList, name, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByNameAndCategory error", ex);
            ex.printStackTrace();
            return null;
        }
    }


    @Override
    public Page<Shop> findByNameAndFilter(List<Integer> districtList,
                                          List<Integer> categoryList,
                                          String name,
                                          Pageable pageable) {
        try {
            return shopRepo.findByNameAndFilter(districtList, categoryList, name, pageable);
        } catch (Exception ex) {
            LOGGER.error("findByDistrictAndCategory error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Shop> update(ShopForm sf) {
        try {
            return districtRepo.findById(sf.getDistrictId())
                    .map(district -> {
                        shopCategoryRepo.deleteByShopId(sf.getShopId());
                        List<ShopCategory> shopCategoryList = sf.getCategoryList()
                                .stream()
                                .map(cat -> {
                                        return ShopCategory.builder()
                                                .shopCategoryId(new ShopCategoryId(sf.getShopId(), cat))
                                                .shop(shopRepo.findById(sf.getShopId()).orElse(null))
                                                .category(categoryRepo.findById(cat).orElse(null))
                                                .build();
                                })
                                .collect(Collectors.toList());
                        shopCategoryRepo.saveAll(shopCategoryList);
                        return shopRepo.findById(sf.getShopId())
                                .map(shop -> {
                                    shop.setShopName(sf.getShopName());
                                    shop.setImgUrl(sf.getImgUrl());
                                    shop.setAddress(sf.getAddress());
                                    shop.setPriceRange(sf.getPriceRange());
                                    shop.setDistrict(district);
                                    return Optional.ofNullable(shopRepo.save(shop));
                                })
                                .orElse(Optional.empty());
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Shop> upload(ShopForm sf) {
        try {
            District district = districtRepo.findById(sf.getDistrictId()).orElse(null);
            Shop shop = Shop.builder()
                    .shopName(sf.getShopName())
                    .imgUrl(sf.getImgUrl())
                    .address(sf.getAddress())
                    .priceRange(sf.getPriceRange())
                    .district(district)
                    .build();
            if (shopRepo.save(shop) == null) throw new HibernateException("Can't add new Shop");

            List<ShopCategory> shopCategoryList = sf.getCategoryList()
                    .stream()
                    .map(cat -> {
                        return ShopCategory.builder()
                                .shopCategoryId(new ShopCategoryId(shop.getShopId(), cat))
                                .shop(shop)
                                .category(categoryRepo.findById(cat).orElse(null))
                                .build();
                    })
                    .collect(Collectors.toList());
            if (shopCategoryRepo.saveAll(shopCategoryList) == null) throw new HibernateException("Can't add new ShopCategory");

            return Optional.ofNullable(shopRepo.save(shop));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
