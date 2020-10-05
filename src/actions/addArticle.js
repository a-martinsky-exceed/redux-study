import action_types from '../action_types';
import { createDBArticle } from '../requests/';
const  { ADD_ARTICLE_STARTED, ADD_ARTICLE_SUCCESS, ADD_ARTICLE_FAILED} = action_types;

const create = (data) => {
  return async dispatch => {
    dispatch(started());
    try {
      const res = await createDBArticle(data);
      dispatch(success(res.data));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: ADD_ARTICLE_SUCCESS, payload: [...data]});

const started = () => ({type: ADD_ARTICLE_STARTED});

const failed = error => ({type: ADD_ARTICLE_FAILED, payload: {error}});

export default create;