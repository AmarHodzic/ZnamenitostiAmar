package com.example.demo.grad;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradRepository extends JpaRepository<Grad, Long> {
}
