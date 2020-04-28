import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import repositories from './repositories'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    repositories
  })

export default createRootReducer
