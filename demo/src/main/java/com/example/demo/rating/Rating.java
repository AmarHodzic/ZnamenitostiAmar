package com.example.demo.rating;

import com.example.demo.grad.Grad;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Rating {
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
    private String rate;

    public Rating() {
    }

    public Rating(Long id, String rate) {
        this.id = id;
        this.rate = rate;
    }

    public Rating(String rate) {
        this.rate = rate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", rate='" + rate + '\'' +
                '}';
    }
}

