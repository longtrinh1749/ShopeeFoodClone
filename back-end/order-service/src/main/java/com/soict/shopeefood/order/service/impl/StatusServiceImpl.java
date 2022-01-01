package com.soict.shopeefood.order.service.impl;

import com.soict.shopeefood.order.entity.Status;
import com.soict.shopeefood.order.payload.StatusForm;
import com.soict.shopeefood.order.repo.StatusRepo;
import com.soict.shopeefood.order.service.StatusService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StatusServiceImpl implements StatusService {

    private static final Logger LOGGER = LoggerFactory.getLogger(StatusServiceImpl.class);

    @Autowired
    private StatusRepo statusRepo;

    @Override
    public Optional<Status> findById(Integer statusId) {
        try {
            return statusRepo.findById(statusId);
        } catch (Exception ex) {
            LOGGER.error("findById error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public List<Status> findAll() {
        try {
            return statusRepo.findAll();
        } catch (Exception ex) {
            LOGGER.error("findAll error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public List<Status> findByName(String name) {
        try {
            return statusRepo.findByName(name);
        } catch (Exception ex) {
            LOGGER.error("findByName error", ex);
            ex.printStackTrace();
            return null;
        }
    }

    @Override
    public Optional<Status> update(StatusForm sf) {
        try {
            return statusRepo.findById(sf.getStatusId())
                    .map(status -> {
                        status.setStatusName(sf.getStatusName());
                        return Optional.ofNullable(statusRepo.save(status));
                    })
                    .orElse(Optional.empty());
        } catch (Exception ex) {
            LOGGER.error("update error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

    @Override
    public Optional<Status> upload(StatusForm sf) {
        try {
            Status status = Status.builder()
                    .statusName(sf.getStatusName())
                    .build();
            return Optional.ofNullable(statusRepo.save(status));
        } catch (Exception ex) {
            LOGGER.error("upload error", ex);
            ex.printStackTrace();
            return Optional.empty();
        }
    }

}
