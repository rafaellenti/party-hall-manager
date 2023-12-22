package com.condo.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;


@Entity 
@Table(name="reserva_info")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;

    @Column(name = "resident_name")
    private String residentName;

    public Reserva () {}

    public Reserva (Long id, String date, String residentName) {
        this.id = id;
        this.date = date;
        this.residentName = residentName;
    }

    public Long getId () {
        return this.id;
    }

    public void setId (Long id) {
        this.id = id;
    }

    public String getDate () {
        return this.date;
    }

    public void setDate (String date) {
        this.date = date;
    }

    public String getResidentName () {
        return this.residentName;
    }

    public void setResidentName (String residentName) {
        this.residentName = residentName;
    }
}
