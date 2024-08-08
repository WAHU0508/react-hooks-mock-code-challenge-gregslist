import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [filterListing, setFilterListing] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(data => {
      setListings(data)
      setFilterListing(data)
    })
  }, [])
  const deleteListing = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      const updatedListing = listings.filter(listing => (listing.id !== id))
      setListings(updatedListing)
      setFilterListing(updatedListing)
    })
  }
  function searchFilter(searchTerm) {
    const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilterListing(filteredListings)
  }
  return (
    <div className="app">
      <Header onSearch={searchFilter}/>
      <ListingsContainer listings={listings} onDelete={deleteListing}/>
    </div>
  );
}

export default App;
