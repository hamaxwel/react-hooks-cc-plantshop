import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOutClick = () => {
    setIsSoldOut((prev) => !prev);
  };

  return (
    <li className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: {plant.price}</p>
      <button onClick={handleSoldOutClick}>
        {isSoldOut ? "Sold Out" : "Available"}
      </button>
    </li>
  );
}

export default PlantCard;
