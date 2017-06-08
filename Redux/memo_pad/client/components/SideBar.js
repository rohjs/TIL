import React, { Component } from 'react'
import { Link } from 'react-router'
import PostItem from './PostItem'

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }
  renderListItems() {
    return this.props.posts.map( (post, idx) => {
      return <PostItem key={post.postId} post={post} idx={idx} selectPost={this.props.selectPost} />
    })
  }
  handleClick() {
    this.props.selectPost(null)
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-util">
          <Link
            to="/"
            className="btn btn--green"
            onClick={this.handleClick}>Home</Link>
        </div>
        <ul className="sidebar-list">
          { this.props.posts && this.renderListItems() }
        </ul>
      </div>
    );
  }
}

export default SideBar