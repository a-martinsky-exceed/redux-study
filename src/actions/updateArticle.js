import action_types from '../action_types';
import { updateDBArticle } from '../requests/';
const  { UPDATE_ARTICLE_STARTED, UPDATE_ARTICLE_SUCCESS, UPDATE_ARTICLE_FAILED} = action_types;

const update = (_id, data) => {
  return async dispatch => {
    const {title, body} = data;
    dispatch(started());
    try {
      const res = await updateDBArticle(_id, {title, body});
      const data = res.data ? res.data : {_id, title, body}
      dispatch(success(data));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: UPDATE_ARTICLE_SUCCESS, payload: {...data}});

const started = () => ({type: UPDATE_ARTICLE_STARTED});

const failed = error => ({type: UPDATE_ARTICLE_FAILED, payload: {error}});

export default update;