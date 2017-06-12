// import react
import React from 'react'
// import redux
import { bindActionCreators } from 'redux'
// import react-redux
import { connect } from 'react-redux'
// import actions
import postsActions from './lib/redux/posts/actions'
import formActions from './lib/redux/form/actions'

class Main extends React.PureComponent {
  onFormChange = () => {
    this.props.updateForm({
      title: this.title.value,
      content: this.content.value
    })
  }

  onButtonClick = () => {
    this.props.submitForm()
  }

  render () {
    const {
      posts,
      form,
      isSubmitting
    } = this.props

    return (
      <div>
        <h2>Test</h2>
        <div>
          { Object.entries(posts)
            .map(([postId, post]) => (
              <div key={postId}>
                <h5>{post.title}</h5>
                <p>{post.content}</p>
              </div>
            ))
          }
        </div>
        <div>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            ref={input => (this.title = input)}
            value={form.title}
            onChange={this.onFormChange}
          />
          <label htmlFor='content'>Content</label>
          <textarea
            id='content'
            ref={(input => this.content = input)}
            value={form.content}
            onChange={this.onFormChange}>
          </textarea>
        </div>
        <button
          type="submit"
          onClick={this.onButtonClick}>
          Submit
        </button>
      </div>
    )
  }
}

// add props to Main (redux state & action dispatch)
export default connect(state => state, d => {
  return {
    ...bindActionCreators(postsActions, d),
    ...bindActionCreators(formActions, d)
  }
})(Main)