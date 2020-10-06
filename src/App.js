import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Content from './components/Content'
import './App.css'


const AppComponent = (props) => {
  return (
    <div className="App">
      {props.isLogging ? <Content /> : <Login />}
    </div>
  );
}

const mapStateToProps = (state) => ({isLogging: state.isLogging});
const App = connect(mapStateToProps)(AppComponent);
export default App;
