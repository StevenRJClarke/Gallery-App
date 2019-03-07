import React, { Component } from 'react'
import Painting from './Painting'

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <h2 className="gallery-title">{this.props.gallery}</h2>

        <div className="gallery-paintings">
          <ol className="paintings-grid">
            {
              this.props.paintings
              .filter( painting => painting.gallery === this.props.gallery && painting.imageURL !== 'No image' )
              .map( painting => (
                <Painting
                  key={painting.title}
                  painting={painting}
                />
              ) )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Gallery
