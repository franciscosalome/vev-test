const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'setCircleOnePosition':
        return {...state, circleOne: action.payload}
    case 'setCircleTwoPosition':
      return {...state, circleTwo: action.payload}
    default:
      return state
  }

}

export default reducers