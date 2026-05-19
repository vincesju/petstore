import React from 'react';
const categories = [
  { label: 'ALL', value: 'ALL' },
  { label: 'CATS', value: 'CAT' },
  { label: 'DOGS', value: 'DOG' },
  { label: 'FISH', value: 'FISH' },
  { label: 'BIRDS', value: 'BIRD' },
  { label: 'REPTILES', value: 'REPTILE' },
];

const CategoryFilter = ({ selected, onSelect }) => (
  <div className="category-tabs" aria-label="Pet categories">
    {categories.map((cat) => (
      <button
        type="button"
        key={cat.value}
        className={`category-tab ${selected === cat.value ? 'category-tab-active' : ''}`}
        onClick={() => onSelect(cat.value)}
      >
        {cat.label}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
