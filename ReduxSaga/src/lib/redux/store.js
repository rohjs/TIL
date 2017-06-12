// import createStore, combine
import { createStore, applyMiddleware, compose } from 'redux'
// import redux-saga
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

let task = sagaMiddleware.run(rootSaga)

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    store.replaceReducer(rootReducer)
  })
}

export default store
