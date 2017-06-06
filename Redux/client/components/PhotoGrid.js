import React, { Component } from 'react'
import Photo from './Photo'

class PhotoGrid extends Component {
  render () {
    return (
      <div className='photo-grid'>
        { 
        	this.props.posts.map( (post, idx) => {
        	  return <Photo {...this.props} post={post} key={idx} idx={idx} />
          })
        }
      </div>
    )
  }
}

export default PhotoGrid
