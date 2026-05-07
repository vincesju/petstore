import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PetGallery from '../src/components/PetGallery';

describe('PetGallery', () => {
  it('shows empty state', () => {
    render(<PetGallery pets={[]} onSelect={() => {}} />);
    expect(screen.getByText(/no pets found/i)).toBeInTheDocument();
  });

  it('renders pets and handles click', () => {
    const pets = [
      { id: 1, name: 'Doggo', category: 'DOG', price: 100, imageUrl: '', description: '' },
      { id: 2, name: 'Kitty', category: 'CAT', price: 200, imageUrl: '', description: '' },
    ];
    const onSelect = jest.fn();
    render(<PetGallery pets={pets} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Doggo'));
    expect(onSelect).toHaveBeenCalledWith(pets[0]);
  });
});
