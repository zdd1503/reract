import React from 'react';
import { createStore } from 'redux';
class Redux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    }
  }
  add() {
    const me = this;
    console.log(me)
    // store.dispatch({ type: 'INCREMENT' })
  }
  delete() {
    console.log(666)
  }

  render() {
    return (
      <div>
        <p>
          Clicked: <span ref={'value'}>0</span> times
         <button style={{
            width: 20,
            height: 20
          }} onClick={this.add.bind(this)}>+</button>
          <button style={{
            width: 20,
            height: 20,
            marginLeft: 30
          }} onClick={this.delete.bind(this)}>-</button>

        </p>
      </div>
    )
  }
  counter(state = 0, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case "DECREMENT":
        return state - 1
      default:
        return state
    }
  }
  renderd() {
    const me = this;
    let store = createStore(me.counter)
    me.refs.value.innerHTML = store.getState().toString()
  }

  componentDidMount() {
    const me = this;
    me.renderd()
    let store = createStore(me.counter)
    console.log(store)

    store.subscribe(me.renderd);

    // store.dispatch({ type: 'INCREMENT' });
    // store.dispatch({ type: 'INCREMENT' })
    // store.dispatch({ type: 'DECREMENT' })
  }
  componentDidUpdate() {

  }
}
export default Redux;