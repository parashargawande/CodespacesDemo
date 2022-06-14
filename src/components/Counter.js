import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux'
import * as ActionTypes from '../store/actionTypes'

// const Counter = () => {
//   const toggleCounterHandler = () => { };
//   const counter = useSelector(state => state.counter)
//   const dispatch = useDispatch()

//   const increment = () => {
//     dispatch({
//       type: ActionTypes.increment
//     })
//   }
//   const decrement = () => {
//     dispatch({
//       type: ActionTypes.decrement
//     })
//   }
//   const incrementBy = (value) => {
//     dispatch({
//       type: ActionTypes.incrementBy,
//       payload: 5
//     })
//   }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <button onClick={increment}>increment</button>
//       <button onClick={decrement}>decrement</button>
//       <button onClick={() => { incrementBy(5) }}>increment by 5</button>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends React.Component {
  increment = () => { }
  decrement = () => { }
  incrementBy = (value) => {

  }
  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{counter}</div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={() => { incrementBy(5) }}>increment by 5</button>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment: dispatch({ type: ActionTypes.increment })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
