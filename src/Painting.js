import React, { Component } from 'react'
import GalleryChanger from './GalleryChanger'

class Painting extends Component {
  render() {
    return (
      <li>
        <div className="painting">
          <div className="painting-top">
            <img
              className="painting-image"
              src={
                (this.props.painting.imageURL)
                ? this.props.painting.imageURL
                : "http://via.placeholder.com/128x193?text=?"
              }
              alt={
                (this.props.painting.imageURL)
                ? this.props.painting.imageURL
                : "http://via.placeholder.com/128x193?text=?"
              }
            />
          </div>
          <div className="painting-title">{this.props.painting.title}</div>
          <div className="painting-artist">Michelangelo Merisi da Caravaggio</div>
        </div>
      </li>
    )
  }
}

export default Painting;
