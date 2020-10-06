import action_types from '../action_types';

const initialState = {
  articles: [],
  isLoading: true,
  isLogging: false
}

const rootReducer = (current_state = initialState, action) => {
  let newState = {...current_state};
  let { articles } = newState;
  const _id = action.payload ? action.payload._id : null;
  let list = [...articles];
  let index, article;
  if (_id) {
    index = list.findIndex(article => article._id === _id);
    article = list.find(article => article._id === _id);
  }
  console.log(action.type);
  switch (action.type) {
    case action.type.includes('STARTED'):
      newState.isLoading = true;
      return newState;
    case action_types.FETCH_SUCCESS:
      newState.isLoading = false;
      newState.articles =[...action.payload];
      return newState;
    case action_types.FETCH_LOCAL_SUCCESS:
      newState.isLoading = false;
      newState.articles =[...action.payload];
      return newState;
    case action.type.includes('FAILED'):
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
        list[index] = action.payload;
      }
      newState = { ...newState, articles: [...list] }
      return newState;
    default:
      break;
  };
  return newState;
};

export default rootReducer;