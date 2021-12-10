package com.soict.shopeefood.user.repository;

import com.soict.shopeefood.user.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    @Query(value = "select p from Profile p where p.userId = ?1")
    List<Profile> findAllByUserId(String userId);
}
