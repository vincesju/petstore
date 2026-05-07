package com.sunga.petstore.service;

import com.sunga.petstore.model.Pet;
import com.sunga.petstore.model.Category;
import com.sunga.petstore.repository.PetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PetService {
    private final PetRepository petRepository;

    @Autowired
    public PetService(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    public List<Pet> getAllPets(Optional<Category> category) {
        if (category.isPresent()) {
            return petRepository.findByCategory(category.get());
        } else {
            return petRepository.findAll();
        }
    }

    public Optional<Pet> getPetById(Long id) {
        return petRepository.findById(id);
    }

    // Pet browsing only: no create, update, or delete methods
}
