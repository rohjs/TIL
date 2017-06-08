import React, { Component } from 'react'
import SideBar from './SideBar'

class Main extends Component {
  render() {
  	const children = React.Children.map(this.props.children, (child) => {
  	  return React.cloneElement(child, this.props)
  	})
    return (
      <div className="main">
        <SideBar {...this.props}/>
        { children }
      </div>
    );
  }
}

export default Main