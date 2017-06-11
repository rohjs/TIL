import { stringEnum } from '../../helpers'

export const actionTypes = stringEnum(
  'UPDATE_FORM',
  'RESET_FORM',
  'SUBMIT_FORM'
)

const actions = {
  updateForm: form => {
    return {
      type: actionTypes.UPDATE_FORM,
      payload: {
        form
      }
    }
  },
  resetForm: () => {
    return {
      type: actionTypes.RESET_FORM,
    }
  },
  submitForm: () => {
    return {
      type: actionTypes.SUBMIT_FORM
    }
  }
}

export default actions
