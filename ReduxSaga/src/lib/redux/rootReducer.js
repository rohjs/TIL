import { combineReducers } from 'redux'
import posts from './posts/reducer'
import form from './form/reducer'

const rootReducer = combineReducers({
  posts,
  form
})

export default rootReducer
