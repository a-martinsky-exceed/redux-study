import action_types from '../action_types';
import { updateDBArticle } from '../requests/';
const  { UPDATE_ARTICLE_STARTED, UPDATE_ARTICLE_SUCCESS, UPDATE_ARTICLE_FAILED} = action_types;

const update = ({id, data}) => {
  return async dispatch => {
    dispatch(started());
    try {
      const res = await updateDBArticle(id, data);
      dispatch(success(res.data));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: UPDATE_ARTICLE_SUCCESS, payload: [...data]});

const started = () => ({type: UPDATE_ARTICLE_STARTED});

const failed = error => ({type: UPDATE_ARTICLE_FAILED, payload: {error}});

export default update;