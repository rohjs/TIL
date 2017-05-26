import React, { Component } from 'react';
import Map from './Map';

class App extends Component {
  render() {
    const containerStyle = {
      position: 'relative',
      width: '75vw',
      height: '100vh'
    };
    const style = {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
    return (
      <div style={containerStyle}>
        <Map style={style}/>
      </div>
    );
  }
}

export default App;