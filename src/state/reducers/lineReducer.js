const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'setLinePosition':
      return action.payload
    default:
      return state
  }

}

export default reducer