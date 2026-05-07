import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const PetGallery = ({ pets, onSelect }) => {
  if (!pets || pets.length === 0) {
    return <div className="text-gray-500 text-center mt-8">No pets found.</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {pets.map((pet) => (
        <Card key={pet.id} className="cursor-pointer" onClick={() => onSelect(pet)}>
          <CardMedia
            component="img"
            height="180"
            image={pet.imageUrl || '/placeholder.png'}
            alt={pet.name}
            className="object-cover"
          />
          <CardContent>
            <Typography variant="h6">{pet.name}</Typography>
            <Typography variant="body2" color="text.secondary">{pet.category}</Typography>
            <Typography variant="body1" color="primary">${pet.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PetGallery;
