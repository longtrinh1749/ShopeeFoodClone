package com.soict.shopeefood.user.entity;


import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "profile")
@Data
public class Profile {
    @Id
    @Column(name = "user_id")
    private Long userId;

    @Column
    private String address;

    @Column
    private String district;

    @Column
    private String city;

    @Column
    private String email;

    @Column
    private String phone;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    private AppUser user;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }
}
