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

const defaultState = {
  welcome: 'Hi',
  otherState: 'some stuff'
}

const greeting = (state= defaultState, action) => {
 switch(action.type){
  case 'GREET_ME': 
    return{ welcome: 'Hello Scott'}
  case 'GREET_WORLD':
    return { welcome: 'Hello Adam'}
  default:
  return state
 }
};


const store = createStore(greeting);
console.log(store.getState());