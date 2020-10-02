import action_types from '../action_types';
const { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARTICLE, FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILED } = action_types;

const initialState = {
  articles: [],
  isLoading: true,
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
  console.log(action.type);
  switch (action.type) {
    case FETCH_STARTED:
      newState.isLoading = true;
      return newState;
    case FETCH_SUCCESS:
      newState.isLoading = false;
      newState.articles =[...action.payload];
      return newState;
    case FETCH_FAILED:
      newState.isLoading = false;
      return newState;
    case ADD_ARTICLE:
      const listArticles = [action.payload, ...articles]
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
        list[index] = action.payload.updates;
      }
      newState = { ...newState, articles: [...list] }
      return newState;
    default:
      break;
  };
  return newState;
};

export default rootReducer;