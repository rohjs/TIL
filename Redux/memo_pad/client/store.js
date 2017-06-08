import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import reducer
import rootReducer from './reducers/index'

// import data
import posts from './data/posts'
import tempLoc from './data/tempLoc'
import currentPost from './data/currentPost'

// create object for default data
const defaultState = {
  posts,
  tempLoc,
  currentPost
}

// create store
const store = createStore(rootReducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// create history
export const history = syncHistoryWithStore(browserHistory, store)

export default store
