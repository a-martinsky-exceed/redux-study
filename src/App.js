import React from 'react';
import { connect } from 'react-redux';
import Login from './components/Login';
import Content from './components/Content'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const AppComponent = (props) => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/'>
            <Login isLogging={props.isLogging}/>
          </Route>
          <Route path='/articles'>
            <Content />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({isLogging: state.isLogging});
const App = connect(mapStateToProps)(AppComponent);
export default App;
