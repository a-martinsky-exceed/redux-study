import React from 'react';
import List from './components/List'
import Form from './components/Form'
import store from './store';
import './App.css'


function App() {
  const state = store.getState()
  return (
    <div className="App">
      <Form />
      <List state={state}/>
    </div>
  );
}

export default App;
