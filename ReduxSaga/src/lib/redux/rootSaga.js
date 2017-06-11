import { fork } from 'redux-saga/effects'
import form from './form/saga'

export default function * rootSaga () {
  yield fork(form)
}
