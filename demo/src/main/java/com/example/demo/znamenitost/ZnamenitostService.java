package com.example.demo.znamenitost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZnamenitostService {

    private final ZnamenitostRepository znamenitostRepository;

    @Autowired
    public ZnamenitostService(ZnamenitostRepository znamenitostRepository) {
        this.znamenitostRepository = znamenitostRepository;
    }

    public List<Znamenitost> getZnamenitosti(){
        return znamenitostRepository.findAll();
    }
}
