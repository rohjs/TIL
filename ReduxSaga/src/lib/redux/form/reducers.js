// import actionTypes
import { actionTypes } from './actions'

// default Form state
const initialForm = {
  title: '',
  content: '',
  isSubmitting: false
}

// form reducer
const formReducer = (state = initialForm, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FORM:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content
      }
    case actionTypes.RESET_FORM:
      return initialForm
    case actionTypes.SUBMIT_FORM:
      return {
        ...state,
        isSubmitting: true
      }
    default:
      return state
  }
}

export default formReducer