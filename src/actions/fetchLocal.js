import action_types from '../action_types';
import { fetch100 } from '../requests';

const { FETCH_LOCAL_STARTED, FETCH_LOCAL_SUCCESS, FETCH_LOCAL_FAILED } = action_types;

const fetchLocal = () => {
  return async dispatch => {
    dispatch(started());
    try {
      const res = await fetch100 ();
      dispatch(success(res));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: FETCH_LOCAL_SUCCESS, payload: [...data]});

const started = () => ({type: FETCH_LOCAL_STARTED});

const failed = error => ({type: FETCH_LOCAL_FAILED, payload: {error}});

export default fetchLocal;