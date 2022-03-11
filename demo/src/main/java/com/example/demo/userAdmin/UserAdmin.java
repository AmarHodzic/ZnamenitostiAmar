package com.example.demo.userAdmin;

import javax.persistence.*;

@Entity
@Table
public class UserAdmin {
    @Id
    @SequenceGenerator(
            name = "drzava_sequence",
            sequenceName = "drzava_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "drzava_sequence"
    )
    private Long id;
    private String username;
    private String password;

    public UserAdmin() {
    }

    public UserAdmin(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public UserAdmin(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserAdmin{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
