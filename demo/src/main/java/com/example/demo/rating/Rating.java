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
    private Integer rate;
    private Long userId;

    public Rating() {
    }

    public Rating(Long id, Integer rate, Long userId) {
        this.id = id;
        this.rate = rate;
        this.userId = userId;
    }

    public Rating(Integer rate, Long userId) {
        this.rate = rate;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "Rating{" +
                "id=" + id +
                ", rate='" + rate + '\'' +
                '}';
    }
}

