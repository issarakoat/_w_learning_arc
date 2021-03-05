/*  /components/features/my-group/my-component.jsx  */

import React, { Component } from 'react'
import Consumer from 'fusion:consumer'
import getProperties from 'fusion:properties'

@Consumer
class MyComponent extends Component {
  render() {
    const siteVars = getProperties(this.props.arcSite)
    console.log(siteVars.twitter)
    console.log(siteVars.meEmail)
    return (
      <div>
        <h2>my-group _ my-component.jsx</h2>
        <p>Twitter: {siteVars.twitter}</p>
        <p>Email: {siteVars.contactEmail}</p>
        <p>MeEmail: {siteVars.meEmail}</p>
        {siteVars.twitter && <a href={`https://twitter.com/${siteVars.twitter}`}>Twitter</a>}
        {siteVars.contactEmail && <a href={`mailto:${siteVars.contactEmail}`}>Contact</a>}
      </div>
    )
  }
}

export default MyComponent