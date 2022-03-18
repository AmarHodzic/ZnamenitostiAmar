package com.example.demo.userAdmin;

import com.example.demo.drzava.Drzava;
import com.example.demo.jwtUtil.JwtResponse;
import com.example.demo.jwtUtil.JwtTokenUtil;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
@RestController
@RequestMapping(path = "api/v1/user")
public class UserAdminController {

    private UserAdminService userAdminService;
    private AuthenticationManager authenticationManager;
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    public UserAdminController(UserAdminService userAdminService,
                               AuthenticationManager authenticationManager,
                               JwtTokenUtil jwtTokenUtil) {
        this.userAdminService = userAdminService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
    }


    @GetMapping
    public List<UserAdmin> getUsers(){
        return userAdminService.getUsers();
    }

    @PostMapping
    public void addUser(@RequestBody UserAdmin userAdmin) {
        userAdminService.save(userAdmin);
    }

    @PostMapping(path="/login")
    public JwtResponse login(@RequestBody UserAdmin userAdmin) throws Exception{
        authenticate(userAdmin.getUsername(),userAdmin.getPassword());

        UserDetails userDetails = userAdminService.loadUserByUsername(userAdmin.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);

        return new JwtResponse(token);
    }
    @GetMapping(path="/auth")
    public Boolean isAuthenticated(){
        return true;
    }

    private void authenticate(String username, String password) throws Exception {
        Objects.requireNonNull(username);
        Objects.requireNonNull(password);
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }

}
