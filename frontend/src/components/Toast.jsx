import React from 'react';

const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50">
    {message}
    <button className="ml-2 underline" onClick={onClose}>Close</button>
  </div>
);

export default Toast;
