import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { formatPrice } from '../utils/formatPrice';

const categoryNames = {
  DOG: 'Companion Dog',
  CAT: 'House Cat',
  BIRD: 'Pet Bird',
  REPTILE: 'Reptile',
  FISH: 'Aquarium Fish',
};

const PetDetails = ({ pet, open, onClose }) => {
  if (!pet) return null;

  const prettyCategory = categoryNames[pet.category] || pet.category;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth className="pet-details-dialog">
      <DialogTitle className="pet-details-title">
        {pet.name}
        <IconButton
          aria-label="close"
          onClick={onClose}
          className="pet-details-close"
          sx={{ position: 'absolute', right: 12, top: 12 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="pet-details-content">
        <img
          src={pet.imageUrl || '/placeholder.png'}
          alt={pet.name}
          className="pet-details-image"
        />
        <div className="pet-details-meta">
          <Typography variant="h6" className="pet-details-category">Category: {prettyCategory}</Typography>
          <Typography variant="h6" className="pet-details-price">Price: {formatPrice(pet.price)}</Typography>
          <Typography variant="body1" className="pet-details-description">
            {pet.description || 'No description available.'}
          </Typography>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PetDetails;
