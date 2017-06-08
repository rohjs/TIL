function posts(state = [], action) {
  const posts = [...state]
  switch(action.type) {
    case 'ADD_POST':
      const newPost = action.post
      const length = posts.length
      posts.push(newPost)
      return posts
    case 'REMOVE_POST':
      posts.splice(action.postId, 1)
      return posts
    case 'EDIT_POST':
      posts[action.postId] = action.post
      return posts
    default:
      return state
  }
}

export default posts