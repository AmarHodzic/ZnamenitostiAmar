package com.example.demo.userAdmin;

import com.example.demo.drzava.Drzava;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(path = "api/v1/user")
public class UserAdminController {

    private UserAdminService userAdminService;

    @Autowired
    public UserAdminController(UserAdminService userAdminService) { this.userAdminService = userAdminService; }


    @GetMapping
    public List<UserAdmin> getUsers(){
        return userAdminService.getUsers();
    }

    @PostMapping
    public void addUser(@RequestBody UserAdmin userAdmin) {
        userAdminService.save(userAdmin);
    }
}
