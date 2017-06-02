import React, { Component } from 'react';
import SideBar from './SideBar';

class PostForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      // title: null,
      // content: null
    // };
    // this.updateTitle = this.updateTitle.bind(this);
    // this.updateContent = this.updateContent.bind(this);
  }
  // updateTitle(event) {
    // this.setState({
      // title: event.target.value;
    // });
  // }
  // updateContent(event) {
    // this.setState({
      // content: event.target.value;
    // });
  // }
  render() {
    return (
      <div className="post__form">
        <SideBar />
        <div>
          <form>
            <input
              type="text"
              placeholder="Title"
              // onChange={this.updateTitle}
              />
            <textarea
              placeholder="Write a story"
              // onChange={this.updateContent}
              >
            </textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostForm;