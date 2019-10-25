import { combineReducers } from 'redux'
import { consumerReducer } from './consumer'
import { vendorReducer } from './vendor'
import { hostReducer } from './host'

export default combineReducers({
  consumer: consumerReducer,
  vendor: vendorReducer,
  host: hostReducer,
})
