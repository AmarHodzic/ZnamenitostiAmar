package com.example.demo.znamenitost;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ZnamenitostRepository extends JpaRepository<Znamenitost, Long> {

    List<Znamenitost> findByLevel(Integer level);

    @Query(value = "select * from znamenitost e where e.title ilike %:keyword%", nativeQuery = true)
    List<Znamenitost> findByKeyword(@Param("keyword") String keyword);

//    @Query(value = "select active,level from table znamenitost where active=true and level=1 || level=2 || level=3", nativeQuery = true)
//    List<Znamenitost> findByLevelAndActive(@Param("level") Integer level,@Param("active")Boolean active);

    List<Znamenitost> findByTitle(String title);
}
