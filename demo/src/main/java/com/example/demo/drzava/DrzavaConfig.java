package com.example.demo.drzava;

import com.example.demo.grad.Grad;
import com.example.demo.znamenitost.Znamenitost;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.Date;
import java.util.List;

@Configuration
public class DrzavaConfig {


    @Bean
    CommandLineRunner commandLineRunnerDrzava(DrzavaRepository repository) {
        return args -> {
            Drzava srbija = new Drzava("Srbija");
            Drzava bosna = new Drzava("Bosna");
//            Drzava srbija1 = new Drzava("Srbija1");

            Grad pazar = new Grad("Pazar");
            Grad sarajevo = new Grad("Sarajevo");

            Znamenitost sinanBeg = new Znamenitost(
                    "SinanBeg",
                    "nekiOpis",
                    "https://cdn.britannica.com/91/65191-050-0EDFC82C/Prophets-Mosque-tomb-Medina-Saudi-Arabia-Muhammad.jpg",
                    "43.138082,20.516577",
                    true,
                    5,
                    1,
                    LocalDate.of(2000, Month.MAY, 5),
                    LocalDate.of(2000, Month.MAY, 5)
                    );

            pazar.getListaZnamenitosti().add(sinanBeg);
            srbija.getGradovi().add(pazar);
            bosna.getGradovi().add(sarajevo);

            repository.saveAll(
                    List.of(srbija, bosna)
            );
        };
    }
}
