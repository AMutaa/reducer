import React, {Component} from 'react';
import {createStore} from 'redux'

class App extends Component{
  render(){
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default App;

const greeting = (state, action) => {

};


const store = createStore(greeting);
console.log(store.getState());