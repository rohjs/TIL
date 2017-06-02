import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const pointerStyle = {
	transform: 'translate(-50%, -100%)',
	width: '100px',
	height: '60px',
	backgroundColor: '#fff',
	borderRadius: '5px'
}

export default class Pointer extends Component {
  render() {
    return (
      <div style={pointerStyle}>
        <Link
          to="/post/new">
          Add a new post?
        </Link>
      </div>
    );
  }
}