import React from "react";
import './Grid.css';
import '../Navbar/Navbar.css';
import Cards from '../Cards/Cards';


import { useApartments } from "../../Hooks/useApartements";





function ApartmentGrid() {
  const apartments = useApartments();
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <Cards
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
