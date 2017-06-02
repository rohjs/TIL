import React, { Component } from 'react';
import SideBar from './SideBar';
import Map from './Map';

class App extends Component {
  render() {
    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: '100vh'
    };
    const sidebarStyle = {
    	position: 'absolute',
    	width: '25%',
    	height: '100vh',
    	left: 0
    };
    const style = {
      position: 'absolute',
      width: '75%',
      height: '100%',
      left: '25%'
    }
    return (
      <div style={containerStyle}>
        <SideBar style={sidebarStyle}/>
        <Map style={{width: '75%'}}/>
      </div>
    );
  }
}

export default App;