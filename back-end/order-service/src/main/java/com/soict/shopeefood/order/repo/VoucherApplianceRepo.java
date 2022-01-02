package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.VoucherAppliance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface VoucherApplianceRepo extends JpaRepository<VoucherAppliance, Integer> {

    @Query(value = "select s from VoucherAppliance s where s.voucher.voucherId = ?1 ")
    List<VoucherAppliance> findByVoucherId(Integer voucherId);

    @Modifying
    @Transactional
    @Query(value = "delete from VoucherAppliance s where s.voucher.voucherId = ?1 ")
    int deleteByShopId(Integer shopId);

}
