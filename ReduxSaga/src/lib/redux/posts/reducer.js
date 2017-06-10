import {
  actionTypes
} from './actions'

const defaultState = {}

const postsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        [Date.now()]: action.payload.post
      }
    case actionTypes.UPDATE_POST:
      return {
        ...state,
        [action.payload.postId]: action.payload.post
      }
    case actionTypes.DELETE_POST:
      state = {...state}
      delete state[action.payload.postId]
      return state
  }
  return state
}

export default postsReducer
