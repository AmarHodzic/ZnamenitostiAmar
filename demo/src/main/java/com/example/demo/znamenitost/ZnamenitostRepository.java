package com.example.demo.znamenitost;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZnamenitostRepository extends JpaRepository<Znamenitost, Long> {

//    List<Znamenitost> findByZnamenitostLevel(Integer level);
}
