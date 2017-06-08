import React, { Component } from 'react'
import MapSample from './MapSample'

class Map extends Component {
  render() {
    return (
      <div className="map">
        <div className="map-intro">
          <p>Quick, easy and elegant</p>
          <p>Note experience</p>
          <p className="copyright">&copy; Jiseung Roh</p>
        </div>
        <div className="map-example">
          <MapSample
            selectPost={this.props.selectPost}
            selectLoc={this.props.selectLoc}
            currentLoc={this.props.currentLoc} />
        </div>
      </div>
    );
  }
}

export default Map