import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const categories = [
  { label: 'All', value: 'ALL' },
  { label: 'Dogs', value: 'DOG' },
  { label: 'Cats', value: 'CAT' },
  { label: 'Birds', value: 'BIRD' },
  { label: 'Reptiles', value: 'REPTILE' },
  { label: 'Fishes', value: 'FISH' },
];

const CategoryFilter = ({ selected, onSelect }) => (
  <ButtonGroup variant="outlined" className="mb-6">
    {categories.map((cat) => (
      <Button
        key={cat.value}
        variant={selected === cat.value ? 'contained' : 'outlined'}
        onClick={() => onSelect(cat.value)}
      >
        {cat.label}
      </Button>
    ))}
  </ButtonGroup>
);

export default CategoryFilter;
