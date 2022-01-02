package com.soict.shopeefood.order.service.external;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Optional;

@FeignClient(name = "product-service", url="http://product-service:8500/api/v1/public")
public interface ProductService {

    @RequestMapping(method = RequestMethod.GET, value = "/shop/{id}")
    Optional<Object> getShopById(@PathVariable("id") int id);

    @RequestMapping(method = RequestMethod.GET, value = "/item/{id}")
    Optional<Object> getItemById(@PathVariable("id") int id);

}
