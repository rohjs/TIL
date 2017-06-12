// import redux-saga effect
import { fork } from 'redux-saga/effects'
// import saga
import form from './form/saga'

export default function * rootSaga () {
  yield fork(form)
}