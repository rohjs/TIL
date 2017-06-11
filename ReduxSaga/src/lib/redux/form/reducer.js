import { actionTypes } from './actions'

const initialForm = {
  title: '',
  content: '',
  isSubmitting: false
}

const formReducer = (state = initialForm, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FORM:
      return {
        ...state,
        title: action.payload.form.title,
        content: action.payload.form.content
      }
    case actionTypes.RESET_FORM:
      return initialForm
    case actionTypes.SUBMIT_FORM:
      return {
        ...state,
        isSubmitting: true
      }
  }
  return state
}

export default formReducer
