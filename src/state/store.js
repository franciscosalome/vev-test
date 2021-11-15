import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(
  reducers,
  {
    circlesPosition: {
    circleOne: { x: 0, y: 0},
    circleTwo: { x: 400, y: 400}
  },
  linePosition: {top:0, left:0, width: 0, angle: 0}
},
  applyMiddleware(thunk)
)