import React, { Component } from 'react'

class GalleryChanger extends Component {
  render () {
    return (
      <div className="gallery-changer">
        <select>
          <option value="move" disabled>Move to...</option>
          <option value="seen">Seen</option>
          <option value="want-to-see">Want to See</option>
          <option value="not-seen">Not Seen</option>
        </select>
      </div>
    )
  }
}

export default GalleryChanger
