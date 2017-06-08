import React, { Component } from 'react'
import { Link } from 'react-router'
import PostItem from './PostItem'

class SideBar extends Component {
  renderListItems() {
    return this.props.posts.map( (post, idx) => {
      return <PostItem key={post.postId} post={post} idx={idx} selectPost={this.props.selectPost} />
    })
  }
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-util">
          <Link
            to="/post/new"
            className="btn btn--green"
            onClick={() => this.props.selectPost(null)}>New</Link>
        </div>
        <ul className="sidebar-list">
          { this.props.posts && this.renderListItems() }
        </ul>
      </div>
    );
  }
}

export default SideBar