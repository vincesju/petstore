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

import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PetController.class)
class PetControllerExceptionTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PetService petService;

    @Test
    void getAllPets_invalidCategory_returnsBadRequest() throws Exception {
        mockMvc.perform(get("/sunga/api/v1/pets?category=INVALID"))
                .andExpect(status().isBadRequest());
    }
}
