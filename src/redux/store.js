import { createStore, combineReducers} from 'redux'
import AppReducer from './reducer'

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  store: AppReducer,
})

// Create the store without persisting it
export const store = createStore(rootReducer)
