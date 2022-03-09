package com.example.demo.znamenitost;

import com.example.demo.common.models.ZnamenitostData;
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

    public List<Znamenitost> getZnamenitostiByLevel(Integer level) {
        return znamenitostRepository.findByLevel(level);
    }

    public List<Znamenitost> getZnamenitostiByTitle(String title) {
        return znamenitostRepository.findByTitle(title);
    }
    public List<Znamenitost> findByKeyWord(String keyword){
        return  znamenitostRepository.findByKeyword(keyword);
    }

    public void deleteZnamenitost(Long znamenitostId) {
        boolean exists = znamenitostRepository.existsById(znamenitostId);
        if(!exists) {
            throw new IllegalStateException(
                    "znamenitost sa id "+ znamenitostId + " ne postoji."
            );
        }
        znamenitostRepository.deleteById(znamenitostId);
    }
}
