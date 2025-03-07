import React, { useState, useEffect } from 'react';
import PlaceForm from './components/PlaceForm';
import PlaceList from './components/PlaceList';

function App() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Load from localStorage on mount
    const storedPlaces = JSON.parse(localStorage.getItem('places')) || [];
    setPlaces(storedPlaces);
  }, []);

  const addPlace = (name) => {
    const newPlace = { id: Date.now(), name };
    const updatedPlaces = [...places, newPlace];
    setPlaces(updatedPlaces);
    localStorage.setItem('places', JSON.stringify(updatedPlaces));
  };

  const editPlace = (id, newName) => {
    const updatedPlaces = places.map(place =>
      place.id === id ? { ...place, name: newName } : place
    );
    setPlaces(updatedPlaces);
    localStorage.setItem('places', JSON.stringify(updatedPlaces));
  };

  const deletePlace = (id) => {
    const updatedPlaces = places.filter(place => place.id !== id);
    setPlaces(updatedPlaces);
    localStorage.setItem('places', JSON.stringify(updatedPlaces));
  };

  return (
    <div className="app">
      <h1>Add Places</h1>
      <PlaceForm addPlace={addPlace} />
      <PlaceList places={places} editPlace={editPlace} deletePlace={deletePlace} />
    </div>
  );
}

export default App;