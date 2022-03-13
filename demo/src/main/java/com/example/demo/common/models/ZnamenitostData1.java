package com.example.demo.common.models;

public class ZnamenitostData1 {
    private String title;
    private String description;
    private String coordination;

    public ZnamenitostData1(String title, String description, String coordination) {
        this.title = title;
        this.description = description;
        this.coordination = coordination;
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

    public String getCoordination() {
        return coordination;
    }

    public void setCoordination(String coordination) {
        this.coordination = coordination;
    }
}
