/*  /components/features/movies/movie-detail.jsx  */

import PropTypes from 'prop-types'
import Consumer from 'fusion:consumer'
import React, { Component, Fragment } from 'react'

@Consumer
class MovieDetail extends Component {
  render () {
    const { Actors, Director, Plot, Poster, Rated, Title, Writer, Year } = this.props.globalContent

    // We can extract our custom field values here, and even set default values if desired...
    const { moviePrefix = 'Movie', showExtendedInfo = false } = this.props.customFields

    return (
      <div className='movie-detail col-sm-12 col-md-8'>
        {/* We use the `moviePrefix` value before the Title */}
        <h1><span {...this.props.editableField('moviePrefix')}>{moviePrefix}:</span>Title: {Title}</h1>

        {/* we can use our boolean value `showExtendedInfo` to determine if certain data gets displayed or not */}
        {showExtendedInfo &&
          <Fragment>
            <h4>Showing</h4>
            {Rated && <p><strong>Rated:</strong> {Rated}</p>}
            {Writer && <p><strong>Writer:</strong> {Writer}</p>}
            {Year && <p><strong>Year:</strong> {Year}</p>}
          </Fragment>
        }
        ...
      </div>
    )
  }
}

MovieDetail.propTypes = {
  customFields: PropTypes.shape({
    moviePrefix: PropTypes.string.isRequired,
    showExtendedInfo: PropTypes.bool
  })
}

export default MovieDetail