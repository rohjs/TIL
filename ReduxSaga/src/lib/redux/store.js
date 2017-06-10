import { createStore } from 'redux'
import rootReducer from './rootReducer'

const store = createStore(rootReducer)

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(rootReducer)
  })
}

export default store
