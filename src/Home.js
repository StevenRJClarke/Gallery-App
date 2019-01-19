import React, { Component } from 'react'
import Gallery from './Gallery'

class Home extends Component {
  state = {
    galleries: ['Seen', 'Want to See']
  }

  render() {
    return (
      <div className="gallery-list">{
        this.state.galleries.map( gallery =>
          <Gallery
            key={gallery}
            gallery={gallery}
          />
        )
      }</div>
    )
  }
}

export default Home;
