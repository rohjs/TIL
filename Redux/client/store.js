import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import reducer
import rootReducer from './reducers/index'

// import data
import comments from './data/comments'
import posts from './data/posts'

// create object for default data
const defaultState = {
  posts,
  comments
}

// create store
const store = createStore(rootReducer, defaultState)

// create history
export const history = syncHistoryWithStore(browserHistory, store)

export default store
