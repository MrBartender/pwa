import { combineReducers } from 'redux'
import { consumerReducer } from './consumer'

export default combineReducers({
  consumer: consumerReducer,
})
