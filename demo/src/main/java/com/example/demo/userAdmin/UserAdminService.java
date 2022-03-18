package com.example.demo.userAdmin;

import com.example.demo.drzava.Drzava;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserAdminService implements UserDetailsService {

    private final UserAdminRepository userAdminRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserAdminService(UserAdminRepository userAdminRepository) {
        this.userAdminRepository = userAdminRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public List<UserAdmin> getUsers(){
        return userAdminRepository.findAll();
    }

    public UserAdmin save(UserAdmin user){
        String encodedPassword = this.passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return this.userAdminRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserAdmin ua = userAdminRepository.getUserAdminByUsername(username);
        return new User(ua.getUsername(),ua.getPassword(),new ArrayList<>());
    }
}
