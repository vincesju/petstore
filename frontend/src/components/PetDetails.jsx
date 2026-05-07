import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PetDetails = ({ pet, open, onClose }) => {
  if (!pet) return null;
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {pet.name}
        <IconButton aria-label="close" onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <img
          src={pet.imageUrl || '/placeholder.png'}
          alt={pet.name}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <Typography variant="h6">Category: {pet.category}</Typography>
        <Typography variant="h6" color="primary">Price: ${pet.price}</Typography>
        <Typography variant="body1" className="mt-2">{pet.description || 'No description available.'}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default PetDetails;
