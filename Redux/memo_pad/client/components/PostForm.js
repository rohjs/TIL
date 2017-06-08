import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

class PostForm extends Component {
  constructor(props) {
    super(props);
    // 왜 syntax error? handleInputChange = () => {}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.redirect = this.redirect.bind(this)
  }

  componentDidMount() {
    const { posts, currentPost } = this.props
    if ( currentPost !== null ) {
      const post = posts[currentPost]
      this.postTitle.value = post.title
      this.postContent.value = post.content;
    }
  }

  componentDidUpdate() {
    if ( this.props.currentPost === null ) {
      this.postTitle.value = ''
      this.postContent.value = ''
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    const { posts, currentPost, currentLoc } = this.props
    const post = {
       title: this.postTitle.value,
       content: this.postContent.value
     }
    if ( currentPost !== null ) {
      post.postId = currentPost
      this.props.editPost(currentPost, post)
      this.redirect(currentPost)
    } else {
      const postId = posts[posts.length - 1].postId + 1
      post.postId = postId
      this.props.addPost(post, currentLoc)
      this.props.selectPost(postId)
      this.redirect(postId)
    }
  }

  redirect(postId) {
    const redirectUrl = `/post/${postId}`
    this.props.router.push(redirectUrl)
  }

  render() {
    return (
      <section className="post-form">
        <form onSubmit={this.handleSubmit}>
          <div className="post-util">
            <Link
              to="/"
              className="btn">Cancel</Link>
            <button
              type="submit"
              className="btn btn--green">Save</button>
          </div>
          <label
            htmlFor="post_title"
            className="sr-only">Title</label>
          <input
            id="post_title"
            className="post-title"
            type="text"
            placeholder="Title"
            ref={input => this.postTitle = input} />
          <label
            htmlFor="post_content"
            className="sr-only">Content</label>
          <textarea
            id="post_cotent"
            className="post-content"
            placeholder="Write a story..."
            ref={input => this.postContent = input }>
          </textarea>
        </form>
      </section>
    );
  }
}

export default PostForm