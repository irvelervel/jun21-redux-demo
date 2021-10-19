// in this file we're going to write ACTION CREATORS
// they are functions returning actions

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const incrementAction = () => ({
  type: INCREMENT,
})

export const decrementAction = () => ({
  type: DECREMENT,
})
