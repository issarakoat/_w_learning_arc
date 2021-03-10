// import React, { useState } from 'react'

// const MoviePlot = (props) => {
//   const [isPlotShown, setPlotShown] = useState(false)

//   return <>
//     {isPlotShown && props.plot}
//     <button onClick={() => setPlotShown(!isPlotShown)}>
//       {isPlotShown ? 'Hide Plot' : 'Show Plot'}
//     </button>
//   </>
// }

// const MovieDetail = (props) =>
//   <div className='movie-detail col-sm-12 col-md-8'>
//     <h1>Jurassic Park</h1>
//     <p><strong>Director:</strong> Steven Spielberg</p>
//     <p><strong>Actors:</strong> Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough</p>
//     <p><strong>Plot:</strong> <MoviePlot plot='This is kinda cool' /></p>
//     <p><strong>Rated:</strong> PG-13</p>
//     <p><strong>Writer:</strong> Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)</p>
//     <p><strong>Year:</strong> 1993</p>
//     <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt={`Poster for Jurassic Park`} />
//   </div>

// MovieDetail.label = 'Movie Detail'

// export default MovieDetail
//######################################################################################################################
// import React, { Component } from 'react'

// class MovieDetail extends Component {
//   render () {
//     return (
//       <div className='movie-detail col-sm-12 col-md-8'>
//         <h1>Jurassic Park</h1>
//         <p><strong>Director:</strong> Steven Spielberg</p>
//         <p><strong>Actors:</strong> Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough</p>
//         <p><strong>Plot:</strong> Lorem ipsum</p>
//         <p><strong>Rated:</strong> PG-13</p>
//         <p><strong>Writer:</strong> Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)</p>
//         <p><strong>Year:</strong> 1993</p>
//         <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt={`Poster for Jurassic Park`} />
//       </div>
//     )
//   }
// }

// MovieDetail.label = {
//   en: 'Movie Detail',
//   es: 'Los detalles de la pelicula'
// }

// export default MovieDetail

//######################################################################################################################
import PropTypes from "prop-types";
import Consumer from "fusion:consumer";
import React, { Component, Fragment } from "react";

@Consumer
class MovieDetail extends Component {
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
            {moviePrefix}:
          </span>
          Title: {Title}
        </h1>
        {/* we can use our boolean value `showExtendedInfo` to determine if certain data gets displayed or not */}
        {showExtendedInfo && (
          <Fragment>
            <div className="movie-detail col-sm-12 col-md-8">
              <h1>{Title}</h1>
              <p>
                <strong>Director:</strong> {Director}
              </p>
              <p>
                <strong>Actors:</strong> {Actors}
              </p>
              <p>
                <strong>Plot:</strong>
                {Plot}
              </p>
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
              <img src={Poster} alt={`Poster for ${Title}`} />
            </div>
          </Fragment>
        )}
        ...
      </div>
    );
  }
}

MovieDetail.propTypes = {
  customFields: PropTypes.shape({
    moviePrefix: PropTypes.string.isRequired,
    showExtendedInfo: PropTypes.bool,
  }),
};

export default MovieDetail;

// /######################################################################################################################
// import React, { Component } from 'react'
// import Consumer from 'fusion:consumer'

// @Consumer
// class MovieDetail extends Component {
//   constructor (props) {
//     super(props)
//     this.state = { isPlotShown: false }
//   }

//   togglePlot () {
//     this.setState(({ isPlotShown }) => ({ isPlotShown: !isPlotShown }))
//   }

//   render () {
//     const { isPlotShown } = this.state

//     const plotButton = (
//       <button onClick={this.togglePlot.bind(this)}>
//         {isPlotShown ? 'Hide Plot' : 'Show Plot'}
//       </button>
//     )

//     const Plot = 'Lorem ipsum'
//     const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent || {}

//     return (
//       <div className='movie-detail col-sm-12 col-md-8'>
//         {Title && <h1>{Title}</h1>}
//         {Director && <p><strong>Director:</strong> {Director}</p>}
//         {Actors && <p><strong>Actors:</strong> {Actors}</p>}
//         {Plot && <p><strong>Plot:</strong> {isPlotShown && Plot} {plotButton}</p>}
//         {Rated && <p><strong>Rated:</strong> {Rated}</p>}
//         {Writer && <p><strong>Writer:</strong> {Writer}</p>}
//         {Year && <p><strong>Year:</strong> {Year}</p>}
//         {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} />}
//       </div>
//     )
//   }
// }

// MovieDetail.label = 'Movie Detail'

// export default MovieDetail
