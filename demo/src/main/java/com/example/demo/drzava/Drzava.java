package com.example.demo.drzava;

import com.example.demo.grad.Grad;
import com.example.demo.znamenitost.Znamenitost;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@Table
public class Drzava {
    @Id
    @SequenceGenerator(
            name = "drzava_sequence",
            sequenceName = "drzava_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "drzava_sequence"
    )
    private Long id;
    private String name;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_drzave")
    private List<Grad> gradovi;

//    @JoinColumn(name = "id_znamenitosti")
//    private List<Znamenitost> listaZnamenitosti;
//    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)

    public Drzava() {
    }

    public Drzava(Long id, String name) {
        this.id = id;
        this.name = name;
        this.gradovi = new ArrayList<Grad>();
//        this.listaZnamenitosti = new ArrayList<Znamenitost>();
    }

    public Drzava(String name) {
        this.name = name;
        this.gradovi = new ArrayList<Grad>();
//        this.listaZnamenitosti = new ArrayList<Znamenitost>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Grad> getGradovi() {
        return gradovi;
    }

    public void setGradovi(List<Grad> gradovi) {
        this.gradovi = gradovi;
    }
//
//    public List<Znamenitost> getListaZnamenitosti() {
//        return listaZnamenitosti;
//    }

//    public void setListaZnamenitosti(List<Znamenitost> listaZnamenitosti) {
//        this.listaZnamenitosti = listaZnamenitosti;
//    }

    @Override
    public String toString() {
        return "Drzava{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
