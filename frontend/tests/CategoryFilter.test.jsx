import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryFilter from '../src/components/CategoryFilter';

describe('CategoryFilter', () => {
  it('renders all categories', () => {
    render(<CategoryFilter selected="ALL" onSelect={() => {}} />);
    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('DOGS')).toBeInTheDocument();
    expect(screen.getByText('CATS')).toBeInTheDocument();
    expect(screen.getByText('BIRDS')).toBeInTheDocument();
    expect(screen.getByText('REPTILES')).toBeInTheDocument();
    expect(screen.getByText('FISH')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    const onSelect = jest.fn();
    render(<CategoryFilter selected="ALL" onSelect={onSelect} />);
    fireEvent.click(screen.getByText('DOGS'));
    expect(onSelect).toHaveBeenCalledWith('DOG');
  });
});
