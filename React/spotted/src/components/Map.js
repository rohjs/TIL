import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import Pointer from './Pointer';
import Marker from './Marker';
 
// API_KEY
const API_KEY = 'AIzaSyBPslkrb2H035wx93zbqY7GeYttB3MdUXg';
// snazzy map style
const COOL_GREY = [
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      { "color": "#e9e9e9" },
      { "lightness": 17 }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "color": "#f5f5f5" },
      { "lightness": 20 }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#ffffff" },
      { "lightness": 17 }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#ffffff" },
      { "lightness": 29 },
      { "weight": 0.2 }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff" },
      { "lightness": 18 }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff" },
      { "lightness": 16 }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "color": "#f5f5f5" },
      { "lightness": 21 }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "color": "#dedede" },
      { "lightness": 21 }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#ffffff" },
      { "lightness": 16 }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      { "saturation": 36 },
      { "color": "#333333" },
      { "lightness": 40 }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "color": "#f2f2f2" },
      { "lightness": 19 }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#fefefe" },
      { "lightness": 20 }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#fefefe" },
      { "lightness": 17 },
      { "weight": 1.2 }
    ]
  }];
const EVEN_LIGHTER = [
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
          { "color": "#6195a0" }
      ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [ { "color": "#f2f2f2" } ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#ffffff" } ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#e6f3d6" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      { "saturation": -100 },
      { "lightness": 45 },
      { "visibility": "simplified" }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [ { "visibility": "simplified" } ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      { "color": "#f4d2c5" },
      { "visibility": "simplified" }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text",
    "stylers": [ { "color": "#4e4e4e" } ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#f4f4f4" } ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [ { "color": "#787878" } ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      { "color": "#eaf6f8" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [ { "color": "#eaf6f8" } ]
  }
];
const ARCHITECTURAL = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      { "weight": "0.5" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [ { "visibility": "simplified" } ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text",
    "stylers": [
      { "lightness": "-50" },
      { "saturation": "-50" }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text",
    "stylers": [
      { "hue": "#009aff" },
      { "saturation": "25" },
      { "lightness": "0" },
      { "visibility": "simplified" },
      { "gamma": "1" }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      { "saturation": "0" },
      { "lightness": "100" },
      { "gamma": "2.31" },
      { "visibility": "on" }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" },
      { "lightness": "20" },
      { "gamma": "1" }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels.text.fill",
    "stylers": [
      { "saturation": "-100" },
      { "lightness": "-100" }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels.text.stroke",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [ { "visibility": "simplified" } ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "lightness": "0" },
      { "saturation": "45" },
      { "gamma": "4.24" },
      { "visibility": "simplified" },
      { "hue": "#00ff90" }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [ { "visibility": "on" } ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      { "saturation": "-100" },
      { "color": "#f5f5f5" }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#666666" }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry.stroke",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [ { "saturation": "-25" } ]
  },
  {
    "featureType": "transit.line",
    "elementType": "all",
    "stylers": [ { "visibility": "simplified" } ]
  },
  {
    "featureType": "transit.station.airport",
    "elementType": "labels.icon",
    "stylers": [ { "visibility": "off" } ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [ { "visibility": "on" } ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "lightness": "50" },
      { "gamma": ".75" },
      { "saturation": "100" }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [ { "visibility": "simplified" } ]
  },
  {
    "featureType": "water",
    "elementType": "labels.icon",
    "stylers": [ { "visibility": "off" } ]
  }
];
const PUNTCENTRIC = [
  {
    "stylers": [
      {"visibility": "simplified"},
      {"saturation":20},
      {"weight":3.2},
      {"lightness":25}
    ]
  }
];
const LIGHT_AND_CLEAN = [
  {
    "featureType": "administrative",
    "elementType": "all",
    "stylers": [
      { "visibility": "on"},
      { "lightness":33}
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      { "color": "#f7f7f7"}
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "all",
    "stylers": [
      { "visibility": "off"}
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      { "color": "#deecdb"}
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels",
    "stylers": [
      { "visibility": "on"},
      { "lightness": "25"}
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
      { "lightness": "25"}
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off"}
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff"}
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      { "saturation": "-90"},
      { "lightness": "25"}
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "all",
    "stylers": [
      { "visibility": "on"}
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff"}
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      { "color": "#ffffff"}
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "all",
    "stylers": [
      { "visibility": "off"}
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "all",
    "stylers": [
      { "visibility": "off"}
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
      { "visibility": "on"},
      { "color": "#e0f1f9"}
    ]
  }
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      selectedPlace: null
    };
    this.createMapOptions = this.createMapOptions.bind(this);
    this.renderPlaces = this.renderPlaces.bind(this);
    this.selectPlace = this.selectPlace.bind(this);
    this.renderPointer = this.renderPointer.bind(this);
  }
  
  // default prop values
  static defaultProps = {
    center: {
      lat: 51.508530,
      lng: -0.076132
    },
    zoom: 14
  };

  // create map options
  createMapOptions(maps) {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: LIGHT_AND_CLEAN
    }
  }

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
  selectPlace({ x, y, lat, lng, event }) {
    const selectedPlace = { x, y, lat, lng, event };
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
        options={this.createMapOptions}
        bootstrapURLKeys={{ 
          key: API_KEY,
          language: 'en'
        }}>
        { this.renderPlaces() }
        { this.renderPointer() }
      </GoogleMapReact>
    );
  }
}

export default Map;