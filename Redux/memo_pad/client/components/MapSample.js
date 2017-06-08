import React, { Component } from 'react'
import { Link } from 'react-router'

class MapSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.onMapClick = this.onMapClick.bind(this)
    // this.showMarker = this.showMarker.bind(this)
  }
  onMapClick(e) {
    const map = e.target
    const currentLoc = {
      lat: e.clientX,
      lng: e.clientY
    }
    this.props.selectLoc(currentLoc)
    this.state.clicked = true
  }
  showMarker() {
    const style = {
      left: this.props.currentLoc.lat,
      top: this.props.currentLoc.lng,
    }
    return (
      <Link
        to="/post/new"
        className="marker"
        onClick={() => this.props.selectPost(null)}
        style={style}>
        Add a new post?
      </Link>
    )
  }
  render() {
    return (
      <section
        className="map-area"
        onClick={this.onMapClick}>
        { this.state.clicked && this.showMarker() }
      </section>
    );
  }
}

export default MapSample 