import React, { Component } from "react";
import Consumer from "fusion:consumer";

@Consumer
class MovieDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = { isPlotShown: false };
  }

  togglePlot() {
    this.setState(({ isPlotShown }) => ({ isPlotShown: !isPlotShown }));
  }

  render() {
    const { isPlotShown } = this.state;
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } =
      this.props.globalContent || {};

    const plotButton = (
      <button onClick={this.togglePlot.bind(this)}>
        {isPlotShown ? "Hide Plot" : "Show Plot"}
      </button>
    );


    return (
      <div className="movie-detail col-sm-12 col-md-8">
        <h2>Getting confused now</h2>
        {Title && <h1>{Title}</h1>}
        {Director && (
          <p>
            <strong>Director:</strong> {Director}
          </p>
        )}
        {Actors && (
          <p>
            <strong>Actors:</strong> {Actors}
          </p>
        )}
        {Plot && (
          <p>
            <strong>Plot:</strong> {isPlotShown && Plot} {plotButton}
          </p>
        )}
        {Rated && (
          <p>
            <strong>Rated:</strong> {Rated}
          </p>
        )}
        {Writer && (
          <p>
            <strong>Writer:</strong> {Writer}
          </p>
        )}
        {Year && (
          <p>
            <strong>Year:</strong> {Year}
          </p>
        )}
        {Poster && Title && <img src={Poster} alt={`Poster for ${Title}`} />}
      </div>
    );
  }
}

MovieDetail.label = "Movie Detail";

export default MovieDetail;

// import React, { useState } from 'react'
// import Consumer from 'fusion:consumer'

// const MoviePlot = (props) => {
//   const [isPlotShown, setPlotShown] = useState(false)
//   // const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent || {}

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
//     <p><strong>Plot:</strong> <MoviePlot plot='This is pretty cool!' /></p>
//     <p><strong>Rated:</strong> PG-13</p>
//     <p><strong>Writer:</strong> Michael Crichton (novel), Michael Crichton (screenplay), David Koepp (screenplay)</p>
//     <p><strong>Year:</strong> 1993</p>
//     <img src='https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg' alt={`Poster for Jurassic Park`} />
//   </div>

// MovieDetail.label = 'Movie Detail'

// export default MovieDetail
