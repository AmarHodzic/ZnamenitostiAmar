package com.example.demo.rating;

import com.example.demo.znamenitost.Znamenitost;
import com.example.demo.znamenitost.ZnamenitostRepository;
import org.apache.logging.log4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RatingService {
//    Logger logger = (Logger) LoggerFactory.getLogger(RatingService.class);
    private final RatingRepository ratingRepository;
    private final ZnamenitostRepository znamenitostRepository;

    @Autowired
    public RatingService(RatingRepository ratingRepository,ZnamenitostRepository znamenitostRepository) {
        this.ratingRepository = ratingRepository;
        this.znamenitostRepository = znamenitostRepository;
    }

    public Rating addRate(Long znamenitostId,Long userId,Integer rate){
        Znamenitost z = this.znamenitostRepository.findById(znamenitostId).orElse(null);
        Rating r = new Rating(rate, userId);
        z.getRatings().add(r);
        float prosek = 0;
//        logger.info("Amarov addRate"+ Math.round(prosek));
        for(int i = 0; i < z.getRatings().size(); i++){
            prosek = prosek + (float)z.getRatings().get(i).getRate();
        }
        prosek = prosek/ z.getRatings().size();
        z.setRating(Math.round(prosek));
        znamenitostRepository.save(z);
        return r;
    }
}
