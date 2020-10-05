import action_types from '../action_types';
import { fetchAll } from '../requests';

const { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILED } = action_types;

const fetchPosts = () => {
  return async dispatch => {
    dispatch(started());
    try {
      const res = await fetchAll ();
      dispatch(success(res.data));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: FETCH_SUCCESS, payload: [...data]});

const started = () => ({type: FETCH_STARTED});

const failed = error => ({type: FETCH_FAILED, payload: {error}});

export default fetchPosts;