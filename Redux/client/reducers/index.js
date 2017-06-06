import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import comments from './comments'

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
})

export default rootReducer

// 1 reducer for 1 state item
