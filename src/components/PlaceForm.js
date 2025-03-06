import React, { useState } from 'react';

function PlaceForm({ addPlace }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addPlace(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="place-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter place name"
        className="input-field"
      />
      <button type="submit" className="add-btn">Add Place</button>
    </form>
  );
}

export default PlaceForm;