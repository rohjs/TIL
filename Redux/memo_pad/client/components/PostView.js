import React, { Component } from 'react'
import { Link } from 'react-router'

class PostView extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete() {
    this.props.removePost(this.props.currentPost)
    this.props.router.push('/')
  }
  render() {
  	const { posts, currentPost } = this.props
  	const post = posts.filter(post => {
      return post.postId === currentPost
    })[0]
   	// 부들부들
    return (
      <article className="post-view">
        <div className="post">
        	<div className="post-util">
        	  <Link
        	    to={`/post/edit/${currentPost}`}
        	    className="btn">Edit</Link>
        	  <button
        	    type="button"
        	    className="btn btn--red"
        	    onClick={this.handleDelete}>Delete</button>
        	</div>
        	<h1 className="post-title">{post.title}</h1>
        	<p className="post-content">{post.content}</p>
        </div>
      </article>
    );
  }
}

export default PostView