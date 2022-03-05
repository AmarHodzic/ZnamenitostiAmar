package com.example.demo.drzava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/drzava")
public class DrzavaController {

    private final DrzavaService drzavaService;

    @Autowired
    public DrzavaController(DrzavaService drzavaService) {
        this.drzavaService = drzavaService;
    }

    @GetMapping
    public List<Drzava> getDrzave(){
        return drzavaService.getDrzave();
    }
}
