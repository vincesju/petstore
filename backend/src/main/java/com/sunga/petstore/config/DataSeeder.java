package com.sunga.petstore.config;

import com.sunga.petstore.model.Category;
import com.sunga.petstore.model.Pet;
import com.sunga.petstore.repository.PetRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;

@Component
public class DataSeeder implements CommandLineRunner {
    private final PetRepository petRepository;

    public DataSeeder(PetRepository petRepository) {
        this.petRepository = petRepository;
    }

    @Override
    public void run(String... args) {
        petRepository.deleteAll();

        petRepository.saveAll(List.of(
                pet("Golden Retriever", Category.DOG, "150.00",
                        "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
                        "Popular family dog known for being friendly, trainable, and gentle with children."),
                pet("Persian Cat", Category.CAT, "120.00",
                        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
                        "Long-haired indoor cat with a calm temperament and high grooming needs."),
                pet("Budgerigar", Category.BIRD, "25.00",
                        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?auto=format&fit=crop&w=800&q=80",
                        "Small parakeet often kept as a beginner-friendly companion bird."),
                pet("Betta Fish", Category.FISH, "8.00",
                        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
                        "Colorful freshwater fish commonly kept in small planted aquariums."),
                pet("Leopard Gecko", Category.REPTILE, "45.00",
                        "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&w=800&q=80",
                        "Hardy beginner reptile with simple care requirements and a calm nature.")
        ));
    }

    private Pet pet(String name, Category category, String price, String imageUrl, String description) {
        Pet pet = new Pet();
        pet.setName(name);
        pet.setCategory(category);
        pet.setPrice(new BigDecimal(price));
        pet.setImageUrl(imageUrl);
        pet.setDescription(description);
        return pet;
    }
}
