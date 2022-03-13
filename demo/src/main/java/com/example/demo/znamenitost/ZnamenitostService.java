package com.example.demo.znamenitost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

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

    public Znamenitost getZnamenitost(Long id) {
        Znamenitost znam = getZnamenitosti().stream()
                .filter(t -> id.equals(t.getId()))
                .findFirst()
                .orElse(null);
        return znam;
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

//     && active.length() > 0

    @Transactional
    public Znamenitost updateZnamenitost(Long znamenitostId, Boolean active){
        Znamenitost znamenitost = znamenitostRepository.findById(znamenitostId).orElseThrow(() -> new IllegalStateException(
                "znamenitost with id " + znamenitostId + " does not exist"
        ));
        if(active != null && !Objects.equals(znamenitost.getActive(), active)) {
            znamenitost.setActive(active);
        }
        return znamenitostRepository.save(znamenitost);
    }

    @Transactional
    public Znamenitost updateZnam(Long znamenitostId, String title, String description, String coordination){
        Znamenitost znamenitost = znamenitostRepository.findById(znamenitostId).orElseThrow(() -> new IllegalStateException(
                "znamenitost with id " + znamenitostId + " does not exist"
        ));
        if(title != null && title.length() > 0 && !Objects.equals(znamenitost.getTitle(), title)) {
            znamenitost.setTitle(title);
        }

        if(description != null && description.length() > 0 && !Objects.equals(znamenitost.getDescription(), description)) {
            znamenitost.setDescription(description);
        }

        if(coordination != null && coordination.length() > 0 && !Objects.equals(znamenitost.getCoordination(), coordination)) {
            znamenitost.setCoordination(coordination);
        }
        return znamenitostRepository.save(znamenitost);
    }

}
