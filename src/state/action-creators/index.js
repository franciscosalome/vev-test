export const changeCircleOnePosition = (newPosition) => {
  return (dispatch) => {
    dispatch({
      type: 'setCircleOnePosition',
      payload: newPosition
    })
  }
}

export const changeCircleTwoPosition = (newPosition) => {
  return (dispatch) => {
    dispatch({
      type: 'setCircleTwoPosition',
      payload: newPosition
    })
  }
}

export const changeLinePosition = (newPosition) => {
  return (dispatch) => {
    dispatch({
      type: 'setLinePosition',
      payload: newPosition
    })
  }
}