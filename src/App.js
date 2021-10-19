import './App.css'
import { connect } from 'react-redux'
import { decrementAction, incrementAction } from './actions'

// mapStateToProps is a function getting the state as an argument
// and must return an object
// every KEY of this object will be a prop for your connected component
const mapStateToProps = (state) => ({
  count: state.count,
})
// const mapStateToProps = (state) => state

// mapDispatch is a function getting the dispatch function as an argument
// and must return an object
// every KEY of this object will be a prop for your connected component
const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => {
    dispatch(incrementAction())
  },
  decrementCounter: () => {
    dispatch(decrementAction())
  },
})

const App = ({ count, incrementCounter, decrementCounter }) => {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={incrementCounter}>+</button>
        {count}
        <button onClick={decrementCounter}>-</button>
      </header>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// we're creating once again a HOC
// higher order component

// we still have to deal with two functions
// mapStateToProps and mapDispatchToProps
// mapStateToProps decides which parts of the Redux store you want to receive as props in this component
// mapDispatchToProps decides the dispatch capabilities of this component,
// so which actions we want to be able to dispatch in order to interact with the Redux store
