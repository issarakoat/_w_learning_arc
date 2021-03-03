/*  /components/features/global/editable_headline.jsx  */

import Consumer from 'fusion:consumer'
import React, { Component } from 'react'

@Consumer
class EditableHeadline extends Component {
  render() {
    // This `content` would come from a content fetch performed elsewhere in this component
    const { content } = {
        headline: "test",
        subheadlines: "test sub",
        description: "des"
    }

    return (
      <>
        <h1>Yo yo test 123</h1>
        <h1 {...this.props.editableContent(content, {
          headline: 'headlines.basic',
          subheadlines: 'subheadlines.basic',
          description: 'description.basic',
        })}
        >
          {content && content.headlines ? content.headlines.basic : ''}
        </h1>
        <h3>
          {content && content.subheadlines ? content.subheadlines.basic : ''}
        </h3>
        <p>
          {content && content.description ? content.description.basic : ''}
        </p>
      </>
    )
  }
}

export default EditableHeadline