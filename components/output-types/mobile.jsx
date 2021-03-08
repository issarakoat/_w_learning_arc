/*  /components/output-types/mobile.jsx  */
import PropTypes from 'prop-types'
import OutputType from './default.jsx'

OutputType.displayPropTypes = {
  hideOnMobile: PropTypes.bool.tag({
    name: 'Hide on Mobile?'
  })
}

export default OutputType
