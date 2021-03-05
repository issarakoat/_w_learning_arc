// We have to import the `PropTypes` module so we can use it later
import PropTypes from "prop-types";
import Consumer from "fusion:consumer";
import React, { Fragment, Component } from "react";

@Consumer
class MovieListII extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        pages: [],
      },
      page: 0,
    };
    this.fetch = this.fetch.bind(this);
    this.fetch();
  }

  fetch() {
    // We're destructuring the `contentService` and `contentConfigValues` keys out of the `movieListConfig` prop inside `this.props.customFields`...
    const {
      contentService,
      contentConfigValues,
    } = this.props.customFields.movieListConfig;
    const { page } = this.state;

    // Increment the page at each call
    this.state.page += 1;

    // ...then we can use these values to replace our hardcoded content source name with `contentService` and our query object with `contentConfigValues` (merged with the `page` param)
    this.fetchContent({
      movies: {
        source: contentService,
        query: Object.assign(contentConfigValues, { page: page + 1 }),
        filter: "{ totalResults Search { Title Year Poster } }",
        transform: (data) => {
          // Check if data is being returned
          if (data && data.Search) {
            // Add the results to the paginated list of movies
            this.state.movies.pages[page] = data.Search;
            return this.state.movies;
          }

          // Otherwise just keep the current list of movies
          else {
            return this.state.movies;
          }
        },
      },
    });
  }

  render() {
    // Concatenate the lists of the movies and filter duplicates - this would ensure that
    // a multiple clicks on the 'More' button wouldn't cause issues with incomplete and out-of-order fetches from
    // network issues
    const movies = []
      .concat(...this.state.movies.pages)
      .filter((movie) => movie);

    return (
      <Fragment>
      <h2>Movies</h2>
      <div className="row">
        {movies &&
          movies.map((movie, idx) => (
            <div className='col-4'>
              <div key={`movie-${idx}`}>
                <h4>{movie.Title}</h4>
                <p>
                  <strong>Year:</strong> {movie.Year}
                </p>
                <img style={{width:'70%'}} src={movie.Poster} />
              </div>
            </div>
          ))}
      </div>
      <br/>
      <button className='btn btn-info btn-lg' onClick={this.fetch}>More</button>
    </Fragment>
    );
  }
}

MovieListII.propTypes = {
  customFields: PropTypes.shape({
    // We're using the Fusion-specific PropType `contentConfig` and passing it the name(s) of the GraphQL schemas this component will work with
    movieListConfig: PropTypes.contentConfig("movies").tag({
      group: "Configure Content",
    }),
  }),
};
export default MovieListII;
