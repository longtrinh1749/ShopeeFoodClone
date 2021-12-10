package com.soict.shopeefood.product.repo;

import com.soict.shopeefood.product.entity.District;
import com.soict.shopeefood.product.entity.District;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface DistrictRepo extends JpaRepository<District, Integer> {

    @Query(value = "select d from District d where d.districtId = :id")
    Optional<District> findById(@Param("id") Integer districtId);

    @Query(value = "select d from District d")
    List<District> findAll();

    @Query(value = "select d from District d where d.districtName like %:name%")
    List<District> findByName(@Param("name") String name);

}
