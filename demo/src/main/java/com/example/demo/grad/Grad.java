package com.example.demo.grad;

import com.example.demo.znamenitost.Znamenitost;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Grad {
    @Id
    @SequenceGenerator(
            name = "grad_sequence",
            sequenceName = "grad_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "grad_sequence"
    )
    private Long id;
    private String name;


    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_znamenitosti")
    private List<Znamenitost> listaZnamenitosti;

    public Grad() {
    }

    public Grad(Long id, String name) {
        this.id = id;
        this.name = name;
        this.listaZnamenitosti = new ArrayList<Znamenitost>();
    }

    public Grad(String name) {
        this.name = name;
        this.listaZnamenitosti = new ArrayList<Znamenitost>();
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

    public List<Znamenitost> getListaZnamenitosti() {
        return listaZnamenitosti;
    }

    public void setListaZnamenitosti(List<Znamenitost> listaZnamenitosti) {
        this.listaZnamenitosti = listaZnamenitosti;
    }

    @Override
    public String toString() {
        return "Grad{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", listaZnamenitosti=" + listaZnamenitosti +
                '}';
    }
}
