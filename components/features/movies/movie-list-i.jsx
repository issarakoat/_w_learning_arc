/*  /components/features/movies/movie-list.jsx  */
import Content, { useContent } from "fusion:content";
import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import { OMDB_API_KEY } from "fusion:environment";

const MovieListI = (props) => {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("Jurassic");
  const [movieList, setMovieList] = useState([]);

  const movies = useContent({
    source: "movie-search",
    query: { movieQuery: query },
    filter: "{ totalResults Search { Title Year Poster } }",
    transform(data) {
      // Check if data is being returned
      if (data && data.Search) {
        return { list: [...data.Search] };
      }

      // Otherwise just keep the current list of movies
      else return movies;
    },
  });

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=21380e99&s=${query}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  })

//   const { list: movieList = [] } = movies;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(query)
    alert(`setting: ${query}`)
}

  return (
    <Fragment>
      <p>You clicked {count} times</p>
      <p>my query : {query}</p>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>Click me</button>

      <form className="mt-4" onSubmit={handleSubmit}>
        <label>
          Search:
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
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

MovieListI.propTypes = {
  customFields: PropTypes.shape({
    // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
    movieListConfig: PropTypes.contentConfig("movies").tag({
      group: "Configure Content",
    }),
  }),
};

export default MovieListI;
