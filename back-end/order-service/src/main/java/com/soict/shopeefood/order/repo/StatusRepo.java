package com.soict.shopeefood.order.repo;

import com.soict.shopeefood.order.entity.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StatusRepo extends JpaRepository<Status, Integer> {

    @Query(value = "select s from Status s where s.statusId = :id")
    Optional<Status> findById(@Param("id") Integer statusId);

    @Query(value = "select s from Status s")
    List<Status> findAll();

    @Query(value = "select s from Status s where s.statusName like %:name%")
    List<Status> findByName(@Param("name") String name);

}
