import { delay } from 'redux-saga'
import { take, select, put, call } from 'redux-saga/effects'
import actions, { actionTypes } from './actions'
import postActions from '../posts/actions'

export default function * formSaga () {
  while (true) {
    yield take(actionTypes.SUBMIT_FORM)
    const form = yield select(state => state.form)
    yield call(delay, 1000)
    yield put(postActions.addPost({
      post: {
        title: form.title,
        content: form.content
      }
    }))
    yield put(actions.resetForm())
  }
}
