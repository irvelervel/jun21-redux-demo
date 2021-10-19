import { createStore } from 'redux'
import { mainReducer } from '../reducers'
// 1) configure our redux store
// 2) define the INITIAL STATE of our app

export const initialState = {
  count: 0,
  isLoading: false,
}

// createStore tipically takes 3 arguments:
// 1) the reducer
// 2) the initial state of the application
// 3) [optional] an enhancer function, today we're going to use to enable our redux devTools

const configureStore = createStore(
  mainReducer,
  initialState,
  // the third argument is going always to be a function, needed for activate specific middlewares,
  // plugins or extensions
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default configureStore
