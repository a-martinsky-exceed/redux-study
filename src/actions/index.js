import action_names from '../action_types';

const { ADD_ARTICLE } = action_names;
const addArticle  = (payload) => ({ type: ADD_ARTICLE, payload});

export {addArticle};