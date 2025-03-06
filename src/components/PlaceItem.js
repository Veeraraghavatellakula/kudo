import React, { useState } from 'react';

function PlaceItem({ place, editPlace, deletePlace }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(place.name);

  const handleEdit = () => {
    if (isEditing && newName.trim()) {
      editPlace(place.id, newName);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="place-item">
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span>{place.name}</span>
      )}
      <div>
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deletePlace(place.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </li>
  );
}

export default PlaceItem;