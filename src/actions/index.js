import action_types from '../action_types';

const { SET_INITIAL, ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, FETCH_SUCCESS, FETCH_FAILED } = action_types;
const setInitial = (payload) => ({type: SET_INITIAL, payload})
const addArticle  = (payload) => ({ type: ADD_ARTICLE, payload });
const removeArticle = (payload) => ({ type: REMOVE_ARTICLE, payload });
const updateArticle = (payload) => ({ type: UPDATE_ARTICLE, payload });
const fetchSuccess = (payload) => ({ type: FETCH_SUCCESS, payload });
const fetchFailed = (payload) => ({ type: FETCH_FAILED, payload });

export {setInitial, addArticle, removeArticle, updateArticle, fetchSuccess, fetchFailed};