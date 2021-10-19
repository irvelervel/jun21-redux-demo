// here we're gonna write the reducer function
// the pure function, which doesn't mutate its arguments, which is consistent
// and with the same input, will always emit the same output

import { initialState } from '../store'
// DRY
// don't repeat yourself

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
