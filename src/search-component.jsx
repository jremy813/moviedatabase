import React from "react";

function Search({ handleInput, search }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        className="searchbox"
        placeholder="search for a movie"
        onChange={handleInput}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
