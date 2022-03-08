package com.example.demo.common.models;

import java.time.LocalDate;

public class ZnamenitostData {
    private String title;
    private String description;
    private String images;
    private String coordination;
    private Boolean active;
    private Integer rating;
    private Integer level;
    private LocalDate createdOn;
    private LocalDate updatedOn;
    private Long gradId;

    public ZnamenitostData(String title, String description, String images, String coordination, Boolean active, Integer rating, Integer level, LocalDate createdOn, LocalDate updatedOn, Long gradId) {
        this.title = title;
        this.description = description;
        this.images = images;
        this.coordination = coordination;
        this.active = active;
        this.rating = rating;
        this.level = level;
        this.createdOn = createdOn;
        this.updatedOn = updatedOn;
        this.gradId = gradId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
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

    public Long getGradId() {
        return gradId;
    }

    public void setGradId(Long gradId) {
        this.gradId = gradId;
    }
}
