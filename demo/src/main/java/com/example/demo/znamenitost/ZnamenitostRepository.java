package com.example.demo.znamenitost;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZnamenitostRepository extends JpaRepository<Znamenitost, Long> {
}
