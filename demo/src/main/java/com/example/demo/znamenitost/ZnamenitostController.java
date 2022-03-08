package com.example.demo.znamenitost;

import com.example.demo.common.models.ZnamenitostData;
import com.example.demo.grad.GradService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

//    @GetMapping(path = "{znamenitostLvel}")
//    public List<Znamenitost> getZnamenitostiByLvel(@PathVariable Integer level) {
//        return znamenitostService.getZnamenitostiByLevel(level);
//    }

    @PostMapping(path = "/",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public Znamenitost addZnamenitost(@RequestBody ZnamenitostData znamenitostData){
        return  gradService.addZnamenitost(znamenitostData);
    }

    @DeleteMapping(path = "{znamenitostId}")
    public void deleteZnamenitost(@PathVariable("znamenitostId") Long znamenitostId){
        znamenitostService.deleteZnamenitost(znamenitostId);
    }
}
