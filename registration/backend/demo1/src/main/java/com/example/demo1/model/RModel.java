package com.example.demo1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="register")

public class RModel {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @Column(name="name")
    private String name;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="phone_no")
    private long pone_no;

    public RModel(){}

    public RModel(long id, String name, String email, String password, long pone_no) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.pone_no = pone_no;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public long getPone_no() {
        return pone_no;
    }

    public void setPone_no(long pone_no) {
        this.pone_no = pone_no;
    }

    @Override
    public String toString() {
        return "RegisterEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", pone_no=" + pone_no +
                '}';
    }
}