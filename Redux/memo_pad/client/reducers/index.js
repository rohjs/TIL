import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from './posts'
import tempLoc from './tempLoc'
import currentPost from './currentPost'

const rootReducer = combineReducers({
  posts,
  tempLoc,
  currentPost,
  routing: routerReducer
})

export default rootReducer

// 1 reducer for 1 state item
