import action_types from '../action_types';
import { fetchAll } from '../requests';

const { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILED } = action_types;
const addArticle  = (payload) => ({ type: ADD_ARTICLE, payload });
const removeArticle = (payload) => ({ type: REMOVE_ARTICLE, payload });
const updateArticle = (payload) => ({ type: UPDATE_ARTICLE, payload });

const fetchPosts = () => {
  return async dispatch => {
    dispatch(fetchStarted());
    try {
      const res = await fetchAll ();
      dispatch(fetchSuccess(res.data));
    } catch (e) {
      dispatch(fetchFailed(e.message));
    }
  };
};

const fetchSuccess = data => ({type: FETCH_SUCCESS, payload: [...data]});

const fetchStarted = () => ({type: FETCH_STARTED});

const fetchFailed = error => ({type: FETCH_FAILED, payload: {error}});

export {addArticle, removeArticle, updateArticle, fetchPosts};