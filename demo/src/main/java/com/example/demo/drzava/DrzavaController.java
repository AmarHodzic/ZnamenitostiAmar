package com.example.demo.drzava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public void addDrzava(@RequestBody Drzava drzava) {
        drzavaService.addDrzava(drzava);
    }
}
