import { stringEnum } from '../../helpers'

export const actionTypes = stringEnum(
  'ADD_POST',
  'REMOVE_POST',
  'UPDATE_POST'
)

const actions = {
  addPost: (post) => {
    return {
      type: actionTypes.ADD_POST,
      payload: post
    }
  },
  removePost: ({postId}) => {
    return {
      type: actionTypes.REMOVE_POST,
      payload: {
        postId
      }
    }
  },
  updatePost: ({postId, post}) => {
    return {
      type: actionTypes.UPDATE_POST,
      payload: {
        postId,
        post
      }
    }
  }
}

export default actions
