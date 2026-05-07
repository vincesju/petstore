import React, { useEffect, useState } from 'react';
import PetGallery from '../components/PetGallery';
import CategoryFilter from '../components/CategoryFilter';
import PetDetails from '../components/PetDetails';
import { fetchPets } from '../services/api';
import { CircularProgress, Alert, Container } from '@mui/material';

const BrowsePets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('ALL');
  const [selectedPet, setSelectedPet] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const loadPets = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPets(category);
      setPets(data);
    } catch (err) {
      setError(err.message);
      setPets([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPets();
    // eslint-disable-next-line
  }, [category]);

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    setDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setDetailsOpen(false);
    setSelectedPet(null);
  };

  return (
    <Container maxWidth="md" className="py-8">
      <CategoryFilter selected={category} onSelect={setCategory} />
      {loading && <div className="flex justify-center my-8"><CircularProgress /></div>}
      {error && <Alert severity="error" className="my-4">{error}</Alert>}
      {!loading && !error && (
        <PetGallery pets={pets} onSelect={handleSelectPet} />
      )}
      <PetDetails pet={selectedPet} open={detailsOpen} onClose={handleCloseDetails} />
    </Container>
  );
};

export default BrowsePets;
