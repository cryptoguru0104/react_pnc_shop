import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { product } from './product/reducer'
import { profile } from './profile/reducer'
import { payment_method } from './payment_method/reducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  product,
  profile,
  payment_method,
  router: routerReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
