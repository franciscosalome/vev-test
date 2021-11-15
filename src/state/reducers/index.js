import { combineReducers } from 'redux'
import circlesReducer from "./circlesReducer"
import lineReducer from './lineReducer'

const reducers = combineReducers({
  circlesPosition: circlesReducer,
  linePosition: lineReducer
});

export default reducers