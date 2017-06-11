import { stringEnum } from '../../helpers'

export const actionTypes = stringEnum(
  'ADD_POST',
  'UPDATE_POST',
  'DELETE_POST'
)

const actions = {
  addPost: ({
    post
  }) => {
    return {
      type: actionTypes.ADD_POST,
      payload: {
        post
      }
    }
  },
  updatePost: ({
    postId,
    post
  }) => {
    return {
      type: actionTypes.UPDATE_POST,
      payload: {
        postId,
        post
      }
    }
  },
  deletePost: ({
    postId
  }) => {
    return {
      type: actionTypes.DELETE_POST,
      payload: {
        postId
      }
    }
  }
}

export default actions
