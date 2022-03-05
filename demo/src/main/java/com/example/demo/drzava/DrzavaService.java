package com.example.demo.drzava;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DrzavaService {

    private final DrzavaRepository drzavaRepository;

    @Autowired
    public DrzavaService(DrzavaRepository drzavaRepository) {
        this.drzavaRepository = drzavaRepository;
    }

    public List<Drzava> getDrzave(){
        return drzavaRepository.findAll();
    }
}
