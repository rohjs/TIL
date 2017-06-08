function currentPost(state = '', action) {
  switch(action.type) {
    case 'SELECT_POST':
      console.log('test');
      return action.postId
    case 'RESET':
      return null
    default:
      return state
  }
}

export default currentPost