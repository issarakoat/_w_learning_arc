/*  /components/features/movies/movie-list.jsx  */
import Content, { useContent } from 'fusion:content';
import React, { Fragment, Component } from 'react';
const MovieList = (props) => {
  const movies = useContent({
    source: 'movie-search', 
    query: { movieQuery: 'Jurassic' }, 
    filter: '{ totalResults Search { Title Year Poster } }',
    transform (data) {
      // Check if data is being returned
      if(data && data.Search)
        return { list: [...data.Search] };

      // Otherwise just keep the current list of movies
      else
        return movies;
    }
  })

  const {list: movieList = []} = movies;

  return (
    <Fragment>
      <h2>Movies</h2>
      <div>
        {movieList && movieList.map((movie, idx) =>
          <div key={`movie-${idx}`}>
            <h4>{movie.Title}</h4>
            <p><strong>Year:</strong> {movie.Year}</p>
            <img src={movie.Poster} />
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default MovieList