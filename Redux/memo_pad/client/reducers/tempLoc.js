function tempLoc(state = {}, action) {
  switch(action.type) {
    case 'SELECT_LOC':
      const loc = {
        lat: action.lat,
        lng: action.lng
      }
      return loc
    default:
      return state
  }
}

export default tempLoc