import React from 'react';
import ReactDOM from 'react-dom/client';
import BrowsePets from './pages/BrowsePets';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowsePets />
  </React.StrictMode>
);
