package com.app.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String username) {
        this.firstname = username;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String name) {
        this.lastname = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Id
    @GeneratedValue
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
}
