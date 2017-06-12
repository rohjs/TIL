// import actions, actionTypes
import actions, { actionTypes } from './actions'
// import actions
import postsActions from '../posts/actions'
// import redux-saga features
import { delay } from 'redux-saga'
import { take, put, call, select } from 'redux-saga/effects'

export default function * formSaga () {
  while (true) {
    // wait for SUBMIT_FORM action
    yield take(actionTypes.SUBMIT_FORM)
    // if the action is created, get the form state and assign it in "form"
    const form = yield select(state => state.form)
    // wait for 1s (Promise)
    yield call(delay, 1000)
    // dispatch an action to postsReducer to add a post
    yield put(postsActions.addPost(form))
    // dispatch an action to reset the form
    yield put(actions.resetForm())
  }
}