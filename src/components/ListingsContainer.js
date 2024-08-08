import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listings.map(listing => (
          <ListingCard
          key={listing.id}
          id={listing.id}
          image={listing.image}
          description={listing.description}
          location={listing.location}
          onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
