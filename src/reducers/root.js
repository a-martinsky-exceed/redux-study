import action_types from '../action_types';

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
    case action_types.FETCH_STARTED:
      newState.isLoading = true;
      return newState;
    case action_types.FETCH_SUCCESS:
      newState.isLoading = false;
      newState.articles =[...action.payload];
      return newState;
    case action_types.FETCH_FAILED:
      newState.isLoading = false;
      return newState;
    case action_types.ADD_ARTICLE_SUCCESS:
      const listArticles = [action.payload, ...articles]
      newState = { ...newState, articles: [...listArticles] }
      return newState;
    case action_types.DELETE_ARTICLE_SUCCESS:
      if (typeof index != undefined) {
        list.splice(index, 1);
        newState = { ...newState, articles: [...list] }
      }
      return newState;
    case action_types.UPDATE_ARTICLE_SUCCESS:
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