package com.example.demo.userAdmin;

import com.example.demo.drzava.Drzava;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class UserAdminService {

    private final UserAdminRepository userAdminRepository;

    @Autowired
    public UserAdminService(UserAdminRepository userAdminRepository) { this.userAdminRepository = userAdminRepository; }

    public List<UserAdmin> getUsers(){
        return userAdminRepository.findAll();
    }
}
