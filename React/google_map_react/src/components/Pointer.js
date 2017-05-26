import React, { Component } from 'react';

const pointerStyle = {
	width: '100px',
	height: '60px',
	backgroundColor: '#fff',
	borderRadius: '5px'
}

export default class Pointer extends Component {
  render() {
    return (
      <div style={pointerStyle}>Pointer</div>
    );
  }
}