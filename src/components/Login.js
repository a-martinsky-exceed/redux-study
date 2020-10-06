import React, { useState } from 'react'
import Input from '../components/Input';
import { register, login } from '../requests';

const Login = (props) => {
  const [Login, setLogin] = useState('');
  const [Password, setPassword] = useState('');
  const [Username, setUsername] = useState('');

  // todo: add action to send request
  const sendData = () => {};

  return (
    <div className='login'>
      <span>Register</span>
      <Input
        type='text'
        value={Login}
        onChange={e=>(setLogin(e.currentTarget.value))}
        placeholder={'login'}
      />
      <Input
        type='text'
        value={Login}
        onChange={e=>(setUsername(e.currentTarget.value))}
        placeholder={'user name'}
      />
      <Input
        type='text'
        value={Login}
        onChange={e=>(setPassword(e.currentTarget.value))}
        placeholder={'password'}
      />
      <br />
      <button onClick={sendData}>Send</button>
    </div>
  )
}

export default Login;