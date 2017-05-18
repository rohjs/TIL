import React, { Component } from 'react';

class TextArea extends Component {
  constructor(props) {
    super(props);
    this.processPost = this.processPost.bind(this);
    this.createPost = this.createPost.bind(this);
  }
  processPost(event) {
    event.preventDefault();
    if ( this.props.selectedPost ) this.updatePost(this.props.selectedPost);
    else this.createPost();
  }
  createPost() {
    const post = {
      content: this.postContent.value,
      createdAt: new Date(Date.now()).toLocaleString()
    };
    // add to App state
    this.props.addPost(post);
    this.postForm.reset();
  }
  render() {
    return (
      <div className="form__area">
        <form
          onSubmit={(event) => this.processPost(event)}
          ref={(input) => this.postForm = input}>
          <label
            className="sr-only"
            htmlFor="post_content">Write a post</label>
          <textarea
            id="post_content"
            className="form__content"
            ref={(input) => this.postContent = input}
            ></textarea>
          <button
            className="btn-save"
            type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default TextArea;