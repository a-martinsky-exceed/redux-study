import action_types from '../action_types';
const { SET_INITIAL, ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, FETCH_SUCCESS, FETCH_FAILED } = action_types;

const initialState = {
  articles: [],
  responseStatus: null
}

const rootReducer = (current_state = initialState, action) => {
  let newState = {...current_state};
  let { articles } = newState;
  const id = action.payload ? action.payload.id : null;
  let list = [...articles];
  let index, article;
  if (id) {
    index = list.findIndex(article => article.id === id);
    article = list.find(article => article.id === id);
  }
  switch (action.type) {
    case SET_INITIAL:
      newState.articles =[...action.payload];
      return newState;
    case ADD_ARTICLE:
      const listArticles = [...articles, action.payload]
      newState = { ...newState, articles: [...listArticles] }
      return newState;
    case REMOVE_ARTICLE:
      if (typeof index != undefined) {
        list.splice(index, 1);
        newState = { ...newState, articles: [...list] }
      }
      return newState;
    case UPDATE_ARTICLE:
      if (article) {
        list[index][action.payload.updatedField.name] = action.payload.updatedField.value;
      }
      newState = { ...newState, articles: [...list] }
      return newState;
    case FETCH_SUCCESS:
      newState.responseStatus = true;
      return newState
    case FETCH_FAILED:
      newState.responseStatus = false;
      return newState;
    default:
      break;
  };
  return newState;
};

export default rootReducer;