// action creators
// actions to make
// 1. add post - PostForm에서 submit하면 포스트가 추가 된다.
// 2. select loc - 위치를 클릭했을 때 해당 위치 값을 넘긴다
// 3. remove post - postId를 넘기면 포스트를 지운다.
// 4. edit post - postId를 넘기면 포스트를 수정한다. 


export function addPost(post) {
  // post data를 받고
  // posts 배열에 추가한다
  return {
    type: 'ADD_POST',
    post
  }
}

export function removePost(postId) {
  return {
    type: 'REMOVE_POST',
    postId
  }
}

export function editPost(postId, post) {
  return {
    type: 'EDIT_POST',
    postId,
    post
  }
}

export function selectPost(postId) {
  return {
    type: 'SELECT_POST',
    postId
  }
}

export function selectLoc(lat, lng) {
  // lat, lng 데이터를 받는다
  return {
    type: 'SELECT_LOC',
    lat,
    lng
  }
}
