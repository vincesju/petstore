package com.sunga.petstore.service;

import com.sunga.petstore.model.Pet;
import com.sunga.petstore.model.Category;
import com.sunga.petstore.repository.PetRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PetServiceTest {
    @Mock
    private PetRepository petRepository;

    @InjectMocks
    private PetService petService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void getAllPets_returnsAllPets() {
        Pet pet1 = new Pet();
        Pet pet2 = new Pet();
        when(petRepository.findAll()).thenReturn(Arrays.asList(pet1, pet2));
        List<Pet> pets = petService.getAllPets(Optional.empty());
        assertEquals(2, pets.size());
    }

    @Test
    void getAllPets_withCategory_returnsFilteredPets() {
        Pet pet = new Pet();
        when(petRepository.findByCategory(Category.DOG)).thenReturn(Arrays.asList(pet));
        List<Pet> pets = petService.getAllPets(Optional.of(Category.DOG));
        assertEquals(1, pets.size());
    }

    @Test
    void getPetById_returnsPet() {
        Pet pet = new Pet();
        when(petRepository.findById(1L)).thenReturn(Optional.of(pet));
        Optional<Pet> result = petService.getPetById(1L);
        assertTrue(result.isPresent());
    }

    @Test
    void getPetById_returnsEmpty() {
        when(petRepository.findById(2L)).thenReturn(Optional.empty());
        Optional<Pet> result = petService.getPetById(2L);
        assertFalse(result.isPresent());
    }
    // Pet browsing only: no create, update, or delete tests
}
