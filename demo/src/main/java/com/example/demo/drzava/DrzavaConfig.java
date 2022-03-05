package com.example.demo.drzava;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DrzavaConfig {


    @Bean
    CommandLineRunner commandLineRunner(DrzavaRepository repository) {
        return args -> {
            Drzava srbija = new Drzava("Srbija");

            Drzava bosna = new Drzava("Bosna");

            repository.saveAll(
                    List.of(srbija, bosna)
            );
        };
    }
}
