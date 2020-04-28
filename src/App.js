import React, { useState } from "react";
import Search from "./search-component";
import axios from "axios";
import Results from "./result-component";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=dfe6d885";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let requests = data.Search;

        setState((prevState) => {
          return { ...prevState, results: requests };
        });
      });
    }
  };

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  return (
    <>
      <div className="App">
        <header>
          <h1>Movie Database</h1>
        </header>
        <div>
          <Search handleInput={handleInput} search={search} />
          <Results info={state.results} />
          {console.log(state.results)}
          <div className="movies">
            {state.results.map((movie) => {
              return (
                <div>
                  <h1>{movie.Title}</h1>
                  <img src={movie.Poster} />
                  <p>{movie.Year}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
