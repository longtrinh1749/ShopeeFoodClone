package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.ItemAudit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Repository
public interface ItemAuditRepo extends JpaRepository<ItemAudit, Integer> {

    @Query(value = "select i from ItemAudit i where i.itemAuditId = ?1")
    Optional<ItemAudit> findById(Integer itemAuditId);

    @Query(value = "select i from ItemAudit i")
    Page<ItemAudit> findAllByPage(Pageable pageable);

    @Query(value = "select i from ItemAudit i where i.item.itemId = ?1")
    List<ItemAudit> findByItemId(Integer itemAuditId);

    @Query(nativeQuery = true, value = "select * from item_audit where item_id = :itemId and update_at <= :orderTime order by update_at desc limit 1")
    Optional<ItemAudit> findByOrderTime(@Param("itemId") Integer itemId, @Param("orderTime") Timestamp orderTime);

}
