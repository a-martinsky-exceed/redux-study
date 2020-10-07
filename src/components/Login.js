import React from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import {signUp} from '../actions/login';

class LoginComponent extends React.Component {
  state = {
    login: '',
    password: '',
    username: '',
    rememberMe: false
  }

  componentDidUpdate() {
    console.log(document.cookie);
  }

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value})
  }

  handleSend = async (option) => {
    const {login, password, username} = this.state;
    switch(option) {
      case 'in':
        if (login && password) {
          this.props.signIn({login, password});
          const signResult = this.props.isLogging;
          document.cookie = `isLogging=${signResult}`;
        }
        break;
      case 'up':
        if (login && password && username) {
          this.props.signUp({login, password, username});
          const signResult = this.props.isLogging;
          document.cookie = `isLogging=${signResult}`;
        }
        break;
      default:
        break;
    }
    this.setState({login: '', password: '', username: ''});
  }

  rememberMe = () => {
    this.setState(prevState => ({rememberMe: !prevState.rememberMe}));
  }

  sign = (option) => {
    const {login, password, username} = this.state;
    return (
      <div className='login'>
        <span>{`Sign ${option}`}</span>
        <Input
          type='text'
          value={login}
          name='login'
          onChange={e=>this.handleChange(e)}
          placeholder={'login'}
        />
        { option === 'up' &&
          <Input
            type='text'
            value={username}
            name='username'
            onChange={e=>this.handleChange(e)}
            placeholder={'user name'}
          />
        }
        <Input
          type='password'
          value={password}
          name='password'
          onChange={e=>this.handleChange(e)}
          placeholder={'password'}
        />
        <br />
        <div className='login-buttons'>
          <button onClick={()=>this.handleSend(option)}>Send</button>
          <label style={{marginLeft: '20px'}}><Input type='checkbox' checked={this.state.rememberMe} onChange={()=>this.rememberMe()}/>Remember me</label>
        </div>
      </div>
    )
  }

  render() {
    const option = this.props.isLogging ? 'in' : 'up';
    return this.sign(option);
  }
}

const mapStateToProps = state => ({isLogging: state.isLogging});
const mapDispatchToProps = ({ signUp });
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;