package com.example.demo.znamenitost;

import com.example.demo.common.models.ZnamenitostData;
import com.example.demo.grad.GradService;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(path = "api/v1/znamenitost")
public class ZnamenitostController {

    private final ZnamenitostService znamenitostService;
    private final GradService gradService;

    @Autowired
    public ZnamenitostController(ZnamenitostService znamenitostService, GradService gradService) {
        this.znamenitostService = znamenitostService;
        this.gradService = gradService;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<Znamenitost> getZnamenitosti() {
        return znamenitostService.getZnamenitosti();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/level/{znamenitostLevel}")
    public List<Znamenitost> getZnamenitostiByLvel(@PathVariable("znamenitostLevel") Integer level) {
        return znamenitostService.getZnamenitostiByLevel(level);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/title/{znamenitostTitle}")
    public List<Znamenitost> getZnamenitostiByTitle(@PathVariable("znamenitostTitle") String title) {
        return znamenitostService.getZnamenitostiByTitle(title);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/keyword/{znamenitostKeyword}")
    public List<Znamenitost> getZnamenitostiByKeyword(@PathVariable("znamenitostKeyword") String keyword){
        return znamenitostService.findByKeyWord(keyword);
    }

    @PostMapping(path = "/",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public Znamenitost addZnamenitost(@RequestBody ZnamenitostData znamenitostData){
        return  gradService.addZnamenitost(znamenitostData);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping(path = "{znamenitostId}")
    public void deleteZnamenitost(@PathVariable("znamenitostId") Long znamenitostId){
        znamenitostService.deleteZnamenitost(znamenitostId);
    }
}
