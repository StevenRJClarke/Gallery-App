import React, { Component } from 'react'

class Painting extends Component {
  render() {
    return (
      <li>
        <div className="painting">
          <img
            className="painting-image"
            src={
              (this.props.painting.imageURL)
              ? this.props.painting.imageURL
              : "http://via.placeholder.com/128x193?text=?"
            }
          />
        </div>
      </li>
    )
  }
}

export default Painting;
