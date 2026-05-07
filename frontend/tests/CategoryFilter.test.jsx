import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../src/components/CategoryFilter';

describe('CategoryFilter', () => {
  it('renders all categories', () => {
    render(<CategoryFilter selected="ALL" onSelect={() => {}} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Dogs')).toBeInTheDocument();
    expect(screen.getByText('Cats')).toBeInTheDocument();
    expect(screen.getByText('Birds')).toBeInTheDocument();
    expect(screen.getByText('Reptiles')).toBeInTheDocument();
    expect(screen.getByText('Fishes')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    const onSelect = jest.fn();
    render(<CategoryFilter selected="ALL" onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Dogs'));
    expect(onSelect).toHaveBeenCalledWith('DOG');
  });
});
