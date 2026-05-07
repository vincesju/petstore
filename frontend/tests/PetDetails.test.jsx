import React from 'react';
import { render, screen } from '@testing-library/react';
import PetDetails from '../src/components/PetDetails';

describe('PetDetails', () => {
  it('renders nothing if no pet', () => {
    const { container } = render(<PetDetails pet={null} open={false} onClose={() => {}} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders pet details when open', () => {
    const pet = { id: 1, name: 'Doggo', category: 'DOG', price: 100, imageUrl: '', description: 'A friendly dog.' };
    render(<PetDetails pet={pet} open={true} onClose={() => {}} />);
    expect(screen.getByText('Doggo')).toBeInTheDocument();
    expect(screen.getByText(/category/i)).toBeInTheDocument();
    expect(screen.getByText(/price/i)).toBeInTheDocument();
    expect(screen.getByText(/A friendly dog./i)).toBeInTheDocument();
  });
});
