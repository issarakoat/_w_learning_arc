import PropTypes from "prop-types";
import Consumer from "fusion:consumer";
import React, { Component, Fragment } from "react";

@Consumer
class MovieDetailServerSide extends Component {
  constructor (props) {
    super(props)
    this.state = { isPlotShown: false }
  }
  togglePlot() {
    this.setState(({ isPlotShown }) => ({ isPlotShown: !isPlotShown }));
  }
  render() {
    const {
      Actors,
      Director,
      Plot,
      Poster,
      Rated,
      Title,
      Writer,
      Year,
    } = this.props.globalContent;
    const { isPlotShown } = this.state;

    const plotButton = (
      <button onClick={this.togglePlot.bind(this)}>
        {isPlotShown ? "Hide Plot" : "Show Plot"}
      </button>
    );

    // We can extract our custom field values here, and even set default values if desired...
    const {
      moviePrefix = "Movie",
      showExtendedInfo = false,
    } = this.props.customFields;

    return (
      <div className="movie-detail col-sm-12 col-md-8">
        {/* We use the `moviePrefix` value before the Title */}
        <h1>
          <span {...this.props.editableField("moviePrefix")}>
            Movie-Detail for {moviePrefix}
          </span>
           {Title}
        </h1>
        {/* we can use our boolean value `showExtendedInfo` to determine if certain data gets displayed or not */}
        {showExtendedInfo && (
          <>
          <div className='row'>
            <div className='col-6'>
              <img src={Poster} alt={`Poster for ${Title}`} />
            </div>
            <div className='col-6'>
              <h1>{Title}</h1>
                <p>
                  <strong>Director:</strong> {Director}
                </p>
                <p>
                  <strong>Actors:</strong> {Actors}
                </p>
                <p><strong>Plot:</strong> {isPlotShown && Plot} {plotButton}</p>
                <p>
                  <strong>Rated:</strong>
                  {Rated}
                </p>
                <p>
                  <strong>Writer:</strong> {Writer}
                </p>
                <p>
                  <strong>Year:</strong> {Year}
                </p>
            </div>
          </div>
          </>
        )}
      </div>
    );
  }
}

MovieDetailServerSide.propTypes = {
  customFields: PropTypes.shape({
    moviePrefix: PropTypes.string.isRequired,
    showExtendedInfo: PropTypes.bool,
  }),
};

MovieDetailServerSide.static = true

export default MovieDetailServerSide;