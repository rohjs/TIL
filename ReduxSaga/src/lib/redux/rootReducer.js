// combine reducers
import { combineReducers } from 'redux'
// import reducers
import posts from './posts/reducers'
import form from './form/reducers'

const rootReducer = combineReducers({
  posts,
  form
})

export default rootReducer