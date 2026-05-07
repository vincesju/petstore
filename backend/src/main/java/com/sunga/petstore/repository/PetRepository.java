package com.sunga.petstore.repository;

import com.sunga.petstore.model.Pet;
import com.sunga.petstore.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PetRepository extends JpaRepository<Pet, Long> {
    List<Pet> findByCategory(Category category);
}
