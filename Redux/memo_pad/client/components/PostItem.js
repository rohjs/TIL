import React, { Component } from 'react'
import { Link } from 'react-router'

const PostItem = ({ post, idx, selectPost }) => {
  return (
    <li className="sidebar-item">
      <Link
        to={`/post/${post.postId}`}
        onClick={() => selectPost(post.postId)} >
        <h3 className="list-title">{post.title}</h3>
        <p className="list-content">{post.content}</p>
      </Link>
    </li>
  )
}

export default PostItem