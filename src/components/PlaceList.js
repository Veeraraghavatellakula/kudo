import React from 'react';
import PlaceItem from './PlaceItem';

function PlaceList({ places, editPlace, deletePlace }) {
  return (
    <ul className="place-list">
      {places.map(place => (
        <PlaceItem
          key={place.id}
          place={place}
          editPlace={editPlace}
          deletePlace={deletePlace}
        />
      ))}
    </ul>
  );
}

export default PlaceList;