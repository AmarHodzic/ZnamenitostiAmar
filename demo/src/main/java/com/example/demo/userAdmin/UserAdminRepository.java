package com.example.demo.userAdmin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAdminRepository extends JpaRepository<UserAdmin, Long> {

    public UserAdmin getUserAdminByUsername(String username);
}
