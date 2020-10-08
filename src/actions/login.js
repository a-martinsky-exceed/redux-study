import action_types from '../action_types';
import { register, loginUser } from '../requests';
const {SIGN_UP, SIGN_IN} = action_types;

const signUp = data => {
  return async dispatch => {
    const response = await register(data);
    const {result} = response.data;
    dispatch(signUpFinish(result));
  }
}

const signIn = data => {
  return async dispatch => {
    const response = await loginUser(data);
    const {result} = response.data;
    dispatch(signInFinish(result));
  }
}

const signUpFinish = data => ({type: SIGN_UP, payload: data});
const signInFinish = data => ({type: SIGN_IN, payload: data});
export {signUp, signIn}