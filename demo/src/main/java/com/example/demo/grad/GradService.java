package com.example.demo.grad;

import com.example.demo.common.models.ZnamenitostData;
import com.example.demo.znamenitost.Znamenitost;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class  GradService {
    private final GradRepository gradRepository;

    @Autowired
    public GradService(GradRepository gradRepository) {
        this.gradRepository = gradRepository;
    }

    public List<Grad> getGradove(){
        return gradRepository.findAll();
    }

    public Znamenitost addZnamenitost(ZnamenitostData znamenitostData){
        Grad g = gradRepository.getById(znamenitostData.getGradId());
        Znamenitost z = new Znamenitost(znamenitostData.getTitle(),znamenitostData.getDescription(),znamenitostData.getImages(),znamenitostData.getCoordination(),znamenitostData.getActive(),znamenitostData.getRating(),znamenitostData.getLevel(),znamenitostData.getCreatedOn(),znamenitostData.getUpdatedOn());
        g.getListaZnamenitosti().add(z);
        gradRepository.save(g);
        return z;
    }
}
