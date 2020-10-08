import React from 'react';
import {connect} from 'react-redux';
import Input from './Input';
import {signIn, signUp} from '../actions/login';

class LoginComponent extends React.Component {
  state = {
    login: '',
    password: '',
    repeatPassword: '',
    username: '',
    rememberMe: false
  }

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({[name]: value})
  }

  handleSend = async (option) => {
    const {login, password, repeatPassword, username, rememberMe} = this.state;
    switch(option) {
      case 'in':
        if (login && password) {
          this.props.signIn({login, password});
          document.cookie = `uuid=${this.props.uuid}`;
        }
        break;
      case 'up':
        if ([login, password, repeatPassword, username].every(item => item.length)) {
          if (password === repeatPassword) {
            this.props.signUp({login, password, username});
          }
        }
        break;
      default:
        break;
    }
    this.setState({login: '', password: '', repeatPassword: '', username: '', rememberMe: ''});
  }

  rememberMe = () => {
    this.setState(prevState => ({rememberMe: !prevState.rememberMe}));
  }

  sign = (option) => {
    const {login, password, repeatPassword, username} = this.state;
    if (option === 'in' && this.props.uuid) {
      this.props.signIn({username: this.props.username, uuid: this.props.uuid})
    }
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
        <Input
          type='password'
          value={repeatPassword}
          name='repeatPassword'
          onChange={e=>this.handleChange(e)}
          placeholder={'repeat password'}
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
    const option = this.props.uuid ? 'in' : 'up';
    return this.sign(option);
  }
}

const mapStateToProps = state => ({uuid: state.uuid, username: state.username});
const mapDispatchToProps = ({ signIn, signUp });
const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;