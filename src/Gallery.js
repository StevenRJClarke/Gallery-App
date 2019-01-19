import React, { Component } from 'react'

class Gallery extends Component {
  render() {
    return (
      <div className="gallery">
        <h2 className="gallery-title">Title</h2>

        <div className="gallery-paintings">
          <ol className="paintings-grid">
          </ol>
        </div>
      </div>
    )
  }
}

export default Gallery
