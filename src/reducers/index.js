// here we're gonna write the reducer function
// the pure function, which doesn't mutate its arguments, which is consistent
// and with the same input, will always emit the same output

import { DECREMENT, INCREMENT } from '../actions'
import { initialState } from '../store'
// DRY
// don't repeat yourself

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        // this will make sure that you're not losing any property on the way
        count: state.count + 1,
      }
    // EVERY case of your reducer must return an object
    // and not any object, but something consistent with your initial state!
    case DECREMENT: {
      return {
        ...state,
        count: state.count - 1,
      }
    }
    default:
      return state
  }
}
