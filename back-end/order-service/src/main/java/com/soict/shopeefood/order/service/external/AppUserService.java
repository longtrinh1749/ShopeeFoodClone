package com.soict.shopeefood.order.service.external;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "user-service", url="http://user-service:8400/v1/public")
public interface AppUserService {

    @RequestMapping(method = RequestMethod.GET, value = "/users")
    List<Object> getUsers();

    @RequestMapping(method = RequestMethod.GET, value = "/users-with-role")
    List<Object> getUsersWithRole();

    @RequestMapping(method = RequestMethod.GET, value = "/users/{id}")
    Optional<Object> getUserById(@PathVariable("id") int id);
}
