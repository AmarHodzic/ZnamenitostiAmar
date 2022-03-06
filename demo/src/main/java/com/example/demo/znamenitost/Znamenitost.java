package com.example.demo.znamenitost;

import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table
public class Znamenitost {
    @Id
    @SequenceGenerator(
            name = "znamenitost_sequence",
            sequenceName = "znamenitost_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "znamenitost_sequence"
    )
    private Long id;
    private String title;
    private String description;
    private String images;
    private String coordination;
    private Boolean active;
    private Integer rating;
    private LocalDate createdOn;
    private LocalDate updatedOn;


    public Znamenitost() {
    }

    public Znamenitost(Long id, String title, String desc, String images, String coordination, Boolean active, Integer rating, LocalDate createdOn, LocalDate updatedOn) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.images = images;
        this.coordination = coordination;
        this.active = active;
        this.rating = rating;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }

    public Znamenitost(String title, String desc, String images, String coordination, Boolean active, Integer rating, LocalDate createdOn, LocalDate updatedOn) {
        this.title = title;
        this.description = desc;
        this.images = images;
        this.coordination = coordination;
        this.active = active;
        this.rating = rating;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc() {
        return description;
    }

    public void setDesc(String desc) {
        this.description = desc;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

    public String getCoordination() {
        return coordination;
    }

    public void setCoordination(String coordination) {
        this.coordination = coordination;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public LocalDate getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(LocalDate createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDate getUpdatedOn() {
        return updatedOn;
    }

    public void setUpdatedOn(LocalDate updatedOn) {
        this.updatedOn = updatedOn;
    }

    @Override
    public String toString() {
        return "Znamenitost{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", desc='" + description + '\'' +
                ", images='" + images + '\'' +
                ", coordination='" + coordination + '\'' +
                ", active=" + active +
                ", rating=" + rating +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}
