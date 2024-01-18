import React, { useState } from "react";
import "./App.css";
import { characters } from "./MarvelData";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    filterCharacters(e.target.value);
  };

  // Function to filter characters based on search term
  const filterCharacters = (term) => {
    const filtered = characters.filter((character) =>
      character.alias.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">MARVELO</h1>
        <input
          placeholder="Search a Bible Character"
          className="topInput"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="cardBody">
        {filteredCharacters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="avatarImage" src={data.img1} alt={data.alias} />
              <h2>{data.alias}</h2>
              <p className="description">{data?.abilities[0]}</p>
              <div className="avatarInfo">
                {/* Add other details as needed */}
                <div className="duration">
                  <ins>◷</ins>
                  <p>Home: {data.homeworld}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
