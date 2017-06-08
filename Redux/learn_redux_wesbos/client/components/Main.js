import React, { Component } from 'react'
import { Link } from 'react-router'

class Main extends Component {
  render () {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, this.props)
    })
    return (
      <div>
        <h1>
          <Link to='/'>Reduxstagram</Link>
        </h1>
        { children }
      </div>
    )
  }
}

export default Main
