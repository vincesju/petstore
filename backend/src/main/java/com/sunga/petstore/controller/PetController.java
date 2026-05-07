package com.sunga.petstore.controller;

import com.sunga.petstore.model.Pet;
import com.sunga.petstore.model.Category;
import com.sunga.petstore.service.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/sunga/api/v1/pets")
public class PetController {
    private static final Logger logger = LoggerFactory.getLogger(PetController.class);
    private final PetService petService;

    @Autowired
    public PetController(PetService petService) {
        this.petService = petService;
    }

    @GetMapping
    public ResponseEntity<List<Pet>> getAllPets(@RequestParam(value = "category", required = false) Category category) {
        logger.info("Fetching pets. Category: {}", category);
        List<Pet> pets = petService.getAllPets(Optional.ofNullable(category));
        if (pets.isEmpty()) {
            logger.info("No pets found{}", category != null ? " for category: " + category : "");
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(pets);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pet> getPetById(@PathVariable Long id) {
        logger.info("Fetching pet by id: {}", id);
        return petService.getPetById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> {
                    logger.warn("Pet not found: {}", id);
                    return ResponseEntity.notFound().build();
                });
    }
}
