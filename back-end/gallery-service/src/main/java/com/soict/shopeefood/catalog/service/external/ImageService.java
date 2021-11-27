package com.soict.shopeefood.catalog.service.external;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@FeignClient(name = "image-service", url="http://image-service:8200/")
public interface ImageService {

    @RequestMapping(method = RequestMethod.GET, value = "/images")
    List<Object> getImages();
}
