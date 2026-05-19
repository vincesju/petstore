import React, { useEffect, useState } from 'react';
import PetGallery from '../components/PetGallery';
import CategoryFilter from '../components/CategoryFilter';
import PetDetails from '../components/PetDetails';
import { fetchPets } from '../services/api';
import { CircularProgress, Alert, Container, TextField } from '@mui/material';

const BrowsePets = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('ALL');
  const [search, setSearch] = useState('');
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

  const filteredPets = pets.filter((pet) => {
    const searchValue = search.trim().toLowerCase();
    if (!searchValue) return true;

    return [pet.name, pet.category, pet.description]
      .filter(Boolean)
      .some((value) => String(value).toLowerCase().includes(searchValue));
  });

  return (
    <main className="app-shell">
      <Container maxWidth="lg" className="browse-container">
        <header className="hero-header">
          <div className="hero-brand-row">
            <img src="/petstore-logo.png" alt="Pet Store logo" className="brand-logo-image" />
            <div>
              <p className="brand-overline">Adopt. Love. Repeat.</p>
              <h1 className="page-title">Pet Store</h1>
            </div>
          </div>
          <p className="hero-subtitle">
            Find your next furry, feathery, or scaly best friend from our handpicked companions.
          </p>
        </header>
        <TextField
          fullWidth
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search pets"
          variant="outlined"
          className="search-field"
          inputProps={{ 'aria-label': 'Search pets' }}
        />
        <CategoryFilter selected={category} onSelect={setCategory} />
        {loading && <div className="loading-state"><CircularProgress /></div>}
        {error && <Alert severity="error" className="my-4">{error}</Alert>}
        {!loading && !error && (
          <PetGallery pets={filteredPets} onSelect={handleSelectPet} />
        )}
        <PetDetails pet={selectedPet} open={detailsOpen} onClose={handleCloseDetails} />
      </Container>
    </main>
  );
};

export default BrowsePets;
