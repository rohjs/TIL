import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Pointer from './Pointer';
import Marker from './Marker';
 
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      selectedPlace: null
    };
    this.renderPlaces = this.renderPlaces.bind(this);
    this.selectPlace = this.selectPlace.bind(this);
    this.renderPointer = this.renderPointer.bind(this);
  }
  
  // default prop values
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 14
  };

  // renders previous notes
  renderPlaces() {
    if ( !this.state.places ) {
      return ;
    }
    return this.state.places.map( place => {
      return (
        <Marker
          lat={place.lat}
          lng={place.lng}
          text={place.title} />
      );
    });
  }

  // update selectedPlace state
  selectPlace(obj) {
    console.log('x: ', obj.x);
    console.log('y: ', obj.y);
    console.log('lat: ', obj.lat);
    console.log('lng: ', obj.lng);
    console.log('event: ', obj.event);
    const selectedPlace = {
      lat: obj.lat,
      lng: obj.lng
    };
    console.log(selectedPlace);
    this.setState({
      selectedPlace: selectedPlace
    });
  }

  renderPointer() {
    const pointerLocation = this.state.selectedPlace;
    if ( !pointerLocation ) {
      return ;
    }
    return (
      <Pointer
        lat={pointerLocation.lat}
        lng={pointerLocation.lng} />
    );
  }
  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        onClick={this.selectPlace}
      >
        { this.renderPlaces() }
        { this.renderPointer() }
      </GoogleMapReact>
    );
  }
}

export default Map;