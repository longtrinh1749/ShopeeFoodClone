package com.soict.shopeefood.order.service.impl;


import com.soict.shopeefood.order.entity.Voucher;
import com.soict.shopeefood.order.payload.VoucherForm;
import com.soict.shopeefood.order.repo.VoucherRepo;
import com.soict.shopeefood.order.service.VoucherService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoucherServiceImpl implements VoucherService {

    private static final Logger LOGGER = LoggerFactory.getLogger(VoucherServiceImpl.class);

    @Autowired
    private VoucherRepo voucherRepo;

    @Override
    public Optional<Voucher> findById(Integer voucherId) {
        try {
            return voucherRepo.findById(voucherId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Voucher> findAll() {
        try {
            return voucherRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Voucher> findByCode(String voucherCode) {
        try {
            return voucherRepo.findByCode(voucherCode);
        } catch (Exception ex) {
            LOGGER.error("findByCode error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Voucher> findByApplyToId(String applyType, Integer applyToId) {
        try {
            return voucherRepo.findByApplyToId(applyType, applyToId);
        } catch (Exception ex) {
            LOGGER.error("findByApplyToId error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Voucher> update(VoucherForm vf) {
        try {
            return voucherRepo.findById(vf.getVoucherId())
                    .map(voucher -> {
                        voucher.setVoucherCode(vf.getVoucherCode());
                        voucher.setDiscount(vf.getDiscount());
                        voucher.setLimitPrice(vf.getLimitPrice());
                        voucher.setDescription(vf.getDescription());
                        voucher.setExpired(vf.getExpired());
                        return Optional.ofNullable(voucherRepo.save(voucher));
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Voucher> upload(VoucherForm vf) {
        try {
            Voucher voucher = Voucher.builder()
                    .voucherCode(vf.getVoucherCode())
                    .discount(vf.getDiscount())
                    .limitPrice(vf.getLimitPrice())
                    .description(vf.getDescription())
                    .expired(vf.getExpired())
                    .build();
            return Optional.ofNullable(voucherRepo.save(voucher));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
