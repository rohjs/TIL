import React, { Component } from 'react';
import MemoContainer from './MemoContainer';
import TextArea from './TextArea';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {},
      selectedPost: null
    };
    this.addPost = this.addPost.bind(this);
    this.selectPost = this.selectPost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.resetSelectedPost = this.resetSelectedPost.bind(this);
  }
  addPost(post) {
    const posts = {...this.state.posts};
    const postId = Object.keys(posts).length || 0;
    posts[`post-${postId}`] = post;
    this.setState({ posts });
  }
  selectPost(key) {
    this.setState({
      selectedPost: key
    });
  }
  resetSelectedPost() {
    this.setState({
      selectedPost: null
    });
  }
  updatePostState(key, post) {
  	const posts = this.state.posts;
    posts[key] = post;
    this.setState({ posts });
  }
  render() {
    return (
      <div className="wrapper">
        <TextArea
          posts={this.state.posts}
          addPost={this.addPost}
          selectedPost={this.state.selectedPost}
          updatePostState={this.updatePostState}
          resetSelectedPost={this.resetSelectedPost}/>
        <MemoContainer
          posts={this.state.posts}
          selectPost={this.selectPost}/>
      </div>
    );
  }
}

export default App;