import React, { Component } from 'react';
import MemoItem from './MemoItem';
import MemoHeader from './MemoHeader';

const MemoContainer = (props) => {
  return (
    <ul className="post__container">
      <MemoHeader />
      {
        Object
          .keys(props.posts)
          .map( post => {
            return (
              <MemoItem
                key={post}
                post={props.posts[post]}
                index={post}
                selectPost={props.selectPost}
                />
            );
          })
      }
    </ul>
  );
}

export default MemoContainer;