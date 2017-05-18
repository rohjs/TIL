import React, { Component } from 'react';

class MemoItem extends Component {
  constructor(props) {
    super(props);
    this.onListItemClick = this.onListItemClick.bind(this);
  }
  render() {
    const post = this.props.post;
    return (
      <li
        className="post__item"
        onClick={(event) => this.onListItemClick(event)} >
        <h4>{ post.title }</h4>
        <p>{ post.content }</p>
        <p>{ post.createdAt }</p>
      </li>
    );
  }
  onListItemClick(event) {
    this.props.selectPost(this.props.index);
  }
}

export default MemoItem;