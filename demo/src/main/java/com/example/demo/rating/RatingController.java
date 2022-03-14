package com.example.demo.rating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(path = "api/v1/rating")
public class RatingController {

    private final RatingService ratingService;

    @Autowired
    public RatingController(RatingService ratingService) { this.ratingService = ratingService; }

    @PostMapping
    public Rating oceniZnamenitost(@RequestParam Long znamenitostId, @RequestParam Long userId, @RequestParam Integer rate){
        return ratingService.addRate(znamenitostId,userId,rate);
    }
}
