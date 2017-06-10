import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import postActions from './lib/redux/posts/actions'

class Main extends React.PureComponent {
  render () {
    const {
      posts,
      actions
    } = this.props

    return (
      <div>
        <h1>test</h1>
        { Object.entries(posts)
          .map(([postId, post]) => (
            <div key={postId}>{post.title}</div>
          ))
        }
        <div>
          <div></div>
          <input />

        </div>

      </div>
    )
  }
}

export default connect(state => state, d => ({actions: bindActionCreators(postActions, d)}))(Main)
