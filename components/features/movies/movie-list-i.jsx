/*  /components/features/movies/movie-list.jsx  */
import React, { Fragment, useState, useEffect } from "react";
import { OMDB_API_KEY } from "fusion:environment";

const MovieListI = (props) => {
  const [query, setQuery] = useState("Jurassic");
  const [movieList, setMovieList] = useState([]);


  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=21380e99&s=${query}`)
      .then(res => res.json())
      .then(
        (result) => {         
          setMovieList(result.Search)
        },
        (error) => {
          console.log(error);
        }
      )
  })

  return (
    <Fragment>
      <form className="mt-4">
        <label>
          Search:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </form>

      <h2>Movies</h2>
      <div className="row">
        {movieList &&
          movieList.map((movie, idx) => (
            <div className="col-4">
              <div key={`movie-${idx}`}>
                <h4>{movie.Title}</h4>
                <p>
                  <strong>Year:</strong> {movie.Year}
                </p>
                <img style={{ width: "70%" }} src={movie.Poster} />
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default MovieListI;
