import { combineReducers } from 'redux'
import { consumerReducer } from './consumer'
import { vendorReducer } from './vendor'

export default combineReducers({
  consumer: consumerReducer,
  vendor: vendorReducer,
})
