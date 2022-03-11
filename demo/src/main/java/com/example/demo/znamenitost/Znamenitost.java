package com.example.demo.znamenitost;

import com.example.demo.grad.Grad;
import com.example.demo.rating.Rating;
import org.apache.tomcat.jni.Local;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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
    private String[] images;
    private String coordination;
    private Boolean active;
    private Integer rating;
    private Integer level;
    private LocalDate createdOn;
    private LocalDate updatedOn;


    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "id_znamenitosti")
    private List<Rating> ratings;


    public Znamenitost() {
    }

    public Znamenitost(Long id, String title, String desc, String[] images, String coordination, Boolean active, Integer rating, Integer level, LocalDate createdOn, LocalDate updatedOn) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.images = images;
        this.coordination = coordination;
        this.active = active;
        this.rating = rating;
        this.level = level;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.ratings = new ArrayList<Rating>();
    }

    public Znamenitost(String title, String desc, String[] images, String coordination, Boolean active, Integer rating, Integer level, LocalDate createdOn, LocalDate updatedOn) {
        this.title = title;
        this.description = desc;
        this.images = images;
        this.coordination = coordination;
        this.active = active;
        this.rating = rating;
        this.level = level;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.ratings = new ArrayList<Rating>();
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

    public String[] getImages() {
        return images;
    }

    public void setImages(String[] images) {
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

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
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
                ", level=" + level +
                ", createdOn=" + createdOn +
                ", updatedOn=" + updatedOn +
                '}';
    }
}
