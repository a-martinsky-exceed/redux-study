import action_types from '../action_types';

const { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE } = action_types;
const addArticle  = (payload) => ({ type: ADD_ARTICLE, payload });
const removeArticle = (payload) => ({ type: REMOVE_ARTICLE, payload });
const updateArticle = (payload) => ({ type: UPDATE_ARTICLE, payload });

export {addArticle, removeArticle, updateArticle};