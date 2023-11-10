import React from "react";
import { useState } from "react";
import './Searchbar.scss'

type SearchQuery = string;

const Searchbar = () => {
    const [searchQuery, setSearchQuery] = useState<SearchQuery>(""); // State to hold the search query

    const handleSearch = () => {
        // Handle the search logic here
        console.log(`Performing a search for: ${searchQuery}`);
      };
    
      //Handle search
      const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      };
 
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Sök destination..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>
          Sök
        </button>
      </div>
    </div>
  );
};

export default Searchbar
