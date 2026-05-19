import React from 'react';
import { Box } from '@mui/material';
import { formatPrice } from '../utils/formatPrice';

const categoryNames = {
  DOG: 'Companion Dog',
  CAT: 'House Cat',
  BIRD: 'Pet Bird',
  REPTILE: 'Reptile',
  FISH: 'Aquarium Fish',
};

const fallbackDescription = 'A friendly pet ready to bring comfort, joy, and personality into a loving home.';

const PetGallery = ({ pets, onSelect }) => {
  if (!pets || pets.length === 0) {
    return <div className="empty-state">No pets found.</div>;
  }

  return (
    <div className="pet-grid">
      {pets.map((pet) => (
        <button
          type="button"
          key={pet.id}
          className="pet-card"
          onClick={() => onSelect(pet)}
        >
          <Box className="pet-image-wrap">
            {pet.imageUrl ? (
              <img src={pet.imageUrl} alt={pet.name} className="pet-image" />
            ) : (
              <div className="pet-image pet-image-placeholder">PAW</div>
            )}
          </Box>
          <div className="pet-card-body">
            <div className="pet-card-header">
              <h2>{pet.name}</h2>
              <span className="pet-status">Available</span>
            </div>
            <p className="pet-breed">{categoryNames[pet.category] || pet.category}</p>
            <p className="pet-description">{pet.description || fallbackDescription}</p>
            <p className="pet-price">{formatPrice(pet.price)}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default PetGallery;
