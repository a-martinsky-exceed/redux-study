import action_types from '../action_types';
import { register, loginUser } from '../requests';
const {SIGN_UP, SIGN_IN} = action_types;

const signUp = data => {
  return async dispatch => {
    const response = await register(data);
    const {success} = response.data.result;
    dispatch(signUpFinish(success));
  }
}

const signIn = data => {
  return async dispatch => {
    const response = await loginUser(data);
    const {success} = response.data;
    dispatch(signInFinish(success));
  }
}

const signUpFinish = data => ({type: SIGN_UP, payload: data});
const signInFinish = data => ({type: SIGN_IN, payload: data});
export {signUp, signIn}