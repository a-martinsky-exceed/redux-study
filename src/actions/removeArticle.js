import action_types from '../action_types';
import { deleteDBArticle } from '../requests/';
const  { DELETE_ARTICLE_STARTED, DELETE_ARTICLE_SUCCESS, DELETE_ARTICLE_FAILED} = action_types;

const remove = (_id) => {
  return async dispatch => {
    dispatch(started());
    try {
      const res = await deleteDBArticle({_id});
      const {data} = res;
      dispatch(success({_id, data}));
    } catch (e) {
      dispatch(failed(e.message));
    }
  };
};

const success = data => ({type: DELETE_ARTICLE_SUCCESS, payload: {...data}});

const started = () => ({type: DELETE_ARTICLE_STARTED});

const failed = error => ({type: DELETE_ARTICLE_FAILED, payload: {error}});

export default remove;