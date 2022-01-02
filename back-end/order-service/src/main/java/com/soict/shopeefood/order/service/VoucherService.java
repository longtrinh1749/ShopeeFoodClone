package com.soict.shopeefood.order.service;

import com.soict.shopeefood.order.entity.Voucher;
import com.soict.shopeefood.order.entity.VoucherAppliance;
import com.soict.shopeefood.order.payload.VoucherApplianceForm;
import com.soict.shopeefood.order.payload.VoucherForm;

import java.util.List;
import java.util.Optional;

public interface VoucherService {

    Optional<Voucher> findById(Integer voucherId);

    List<Voucher> findAll();

    List<Voucher> findByCode(String voucherCode);

    List<Voucher> findByApplyToId(String applyType, Integer applyToId);

    Optional<Voucher> upload(VoucherForm voucherForm);

    Optional<Voucher> update(VoucherForm voucherForm);

}
