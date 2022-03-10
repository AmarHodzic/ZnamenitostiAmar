package com.example.demo.grad;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(path = "api/v1/grad")
public class GradController {

    private final GradService gradService;

    @Autowired
    public GradController(GradService gradService) {
        this.gradService = gradService;
    }

    @GetMapping
    public List<Grad> getGradove() {
        return gradService.getGradove();
    }
}
