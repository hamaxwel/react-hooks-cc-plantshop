import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-9-jz8e.onrender.com/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
