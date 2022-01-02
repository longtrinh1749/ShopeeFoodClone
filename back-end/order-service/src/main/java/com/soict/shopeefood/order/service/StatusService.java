package com.soict.shopeefood.order.service;

import com.soict.shopeefood.order.entity.Status;
import com.soict.shopeefood.order.payload.StatusForm;

import java.util.List;
import java.util.Optional;

public interface StatusService {

    Optional<Status> findById(Integer statusId);

    List<Status> findAll();

    List<Status> findByName(String name);

    Optional<Status> upload(StatusForm StatusForm);

    Optional<Status> update(StatusForm StatusForm);

}
