import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import postActions from './lib/redux/posts/actions'
import formActions from './lib/redux/form/actions'

class Main extends React.PureComponent {
  onFormChange = () => {
    this.props.actions.updateForm({
      title: this.title.value,
      content: this.content.value
    })
  }

  onSubmitButtonClick = () => {
    this.props.actions.submitForm()
  }

  render () {
    const {
      posts,
      form,
      actions
    } = this.props

    return (
      <div>
        <h1>test</h1>
        { Object.entries(posts)
          .map(([postId, post]) => (
            <div key={postId}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          ))
        }
        <div>
          <h2>Form</h2>
          <div>
            <div>title</div>
            <input
              ref={title => (this.title = title)}
              value={form.title}
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <div>content</div>
            <textarea
              ref={content => (this.content = content)}
              value={form.content}
              onChange={this.onFormChange}
            />
          </div>
          <div>
            <button
              disabled={form.isSubmitting}
              onClick={this.onSubmitButtonClick}
            >
              {form.isSubmitting
                ? 'Submitting...'
                : 'Submit'
              }
            </button>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(state => state, d => ({
  actions: {
    ...bindActionCreators(postActions, d),
    ...bindActionCreators(formActions, d)
  }
}))(Main)
