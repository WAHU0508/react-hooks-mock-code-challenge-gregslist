import React, { useState } from "react";

function ListingCard({ id, image, description, location, onDelete }) {
  const [isLiked, setIsLiked] = useState(true)
  const handleLiked = () => {
    setIsLiked(!isLiked)
  }
  let myClass = (isLiked ? "emoji-button favorite active" : "emoji-button favorite")
  
  const handleDelete = () => {
    onDelete(id)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          className={myClass}
          onClick={handleLiked} 
        >
          {isLiked ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
