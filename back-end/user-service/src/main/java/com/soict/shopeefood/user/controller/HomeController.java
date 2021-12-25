package com.soict.shopeefood.user.controller;

import com.soict.shopeefood.user.repository.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    private Environment env;

    @Autowired
    AppUserRepository appUserRepository;

    @GetMapping("/hello")
    public String home() {
//		appUserRepository.findAll().forEach(System.out::println);
        return "Hello from User Service running at port: " + env.getProperty("local.server.port");
    }
}
