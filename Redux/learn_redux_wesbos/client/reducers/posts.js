// reducers take two things:
// 1. action
// 2. copy of current state
// ===> gives the result back

function posts (state = [], action) {
  console.log(state, action)
  return state
}

export default posts
