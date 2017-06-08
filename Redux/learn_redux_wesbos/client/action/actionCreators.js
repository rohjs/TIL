// something that is going to happen in your app
export const INCREMENT_LIKES = 'INCREMENT_LIKES'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
// increment
export function increment (index) {
  // which post ? identifier
  // ACTION = TYPE & PAYLOAD
  return {
    type: INCREMENT_LIKES,
    index
  }
}
// add comment
export function addComment (postId, author, comment) {
  return {
    type: ADD_COMMENT,
    postId,
    author,
    comment
  }
}
// remove comment
export function removeComment (postId, index) {
  return {
    type: REMOVE_COMMENT,
    index,
    postId
  }
}
