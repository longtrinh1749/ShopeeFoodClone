package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.Category;
import com.soict.shopeefood.product.entity.ItemAudit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ItemAuditRepo extends JpaRepository<ItemAudit, Integer> {

    @Query(value = "select i from ItemAudit i where i.itemAuditId = ?1")
    Optional<ItemAudit> findById(Integer itemAuditId);

    @Query(value = "select i from ItemAudit i")
    List<ItemAudit> findAll();

    @Query(value = "select c from Category c where c.catName = :name")
    Optional<Category> findExistedCategory(@Param("name") String name);

}
