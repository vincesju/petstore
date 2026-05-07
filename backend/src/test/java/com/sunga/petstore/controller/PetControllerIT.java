package com.sunga.petstore.controller;

import com.sunga.petstore.model.Pet;
import com.sunga.petstore.model.Category;
import com.sunga.petstore.service.PetService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(PetController.class)
class PetControllerIT {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PetService petService;

    @Test
    void getAllPets_returnsPets() throws Exception {
        Pet pet = new Pet();
        when(petService.getAllPets(Optional.empty())).thenReturn(Arrays.asList(pet));
        mockMvc.perform(get("/sunga/api/v1/pets"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

    @Test
    void getPetById_returnsPet() throws Exception {
        Pet pet = new Pet();
        when(petService.getPetById(1L)).thenReturn(Optional.of(pet));
        mockMvc.perform(get("/sunga/api/v1/pets/1"))
                .andExpect(status().isOk());
    }

    @Test
    void getPetById_notFound() throws Exception {
        when(petService.getPetById(2L)).thenReturn(Optional.empty());
        mockMvc.perform(get("/sunga/api/v1/pets/2"))
                .andExpect(status().isNotFound());
    }
    // Pet browsing only: no create, update, or delete endpoint tests
}
