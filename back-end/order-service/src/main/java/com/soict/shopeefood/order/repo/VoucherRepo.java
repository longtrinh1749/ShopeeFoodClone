package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VoucherRepo extends JpaRepository<Voucher, Integer> {

    @Query(value = "select s from Voucher s where s.voucherId = ?1")
    Optional<Voucher> findById(Integer voucherId);

    @Query(value = "select s from Voucher s")
    List<Voucher> findAll();

    @Query(value = "select s from Voucher s where s.voucherCode = ?1 order by s.voucherId desc ")
    List<Voucher> findByCode(String voucherCode);

    @Query(value = "select distinct s from Voucher s join fetch VoucherAppliance c on s.voucherId = c.voucherApplianceId.voucherId \n" +
                    "where c.applyType = :applyType and c.applyToId = :applyToId \n" +
                    "order by s.voucherId desc ")
    List<Voucher> findByApplyToId(@Param("applyType") String applyType,
                                  @Param("applyToId") Integer applyToId);

}
