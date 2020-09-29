import React from 'react';
import List from './components/List'
import Add from './components/Add'
import store from './store';
import './App.css'


function App() {
  const state = store.getState()
  return (
    <div className="App">
      <Add />
      <List state={state}/>
    </div>
  );
}

export default App;
