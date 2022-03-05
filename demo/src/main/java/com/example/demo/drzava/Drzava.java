package com.example.demo.drzava;

import javax.persistence.*;

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

    public Drzava() {
    }

    public Drzava(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public Drzava(String name) {
        this.name = name;
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

    @Override
    public String toString() {
        return "Drzava{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
