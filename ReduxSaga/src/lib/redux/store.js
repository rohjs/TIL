import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
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
  // Saga를 핫리로드하기 위해선 좀 더 복잡한 전략이 필요하다.
  // module.hot.accept('./rootSaga', () => {
  //   task.cancel()
  //   task = sagaMiddleware.run(rootSaga)
  // })
}

export default store
