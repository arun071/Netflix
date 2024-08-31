package com.Api.demo.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "netflix")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private int year;

    @Column(nullable = false)
    private double rating;

    @Column(nullable = false)
    private int runtime;

    @Column(nullable = false)
    private String director;

    @Column(nullable = false)
    private String imgUrl;


    // Constructors, getters and setters, and other methods...

    // Getters


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getYear() {
        return year;
    }

    public double getRating() {
        return rating;
    }

    public int getRuntime() {
        return runtime;
    }

    public String getDirector() {
        return director;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setRuntime(int runtime) {
        this.runtime = runtime;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}

