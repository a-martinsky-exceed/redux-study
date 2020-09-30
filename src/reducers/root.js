import action_types from '../action_types';
const { ADD_ARTICLE, REMOVE_ARTICLE, UPDATE_ARRICLE } = action_types;

const initialState = {
  articles: []
}

const rootReducer = (current_state = initialState, action) => {
  let newState = {...current_state};
  let { articles } = newState;
  const id = action.payload ? action.payload.id : null;
  let list = [...articles];
  let index, article;
  if (id) {
    index = articles.findIndex(article => article.id === id);
    article = articles.find(article => article.id === id);
  }
  switch (action.type) {
    case ADD_ARTICLE:
      const listArticles = [...articles, action.payload]
      newState = { ...newState, articles: [...listArticles] }
      return newState;
    case REMOVE_ARTICLE:
      if (typeof index != undefined) {
        console.log(index, list, 'remove')
        list.splice(index, 1);
        newState = { ...newState, articles: [...list] }
      }
      return newState;
    case UPDATE_ARRICLE:
      if (article) {
        list[index][action.payload.updatedField] = action.payload.updatedField;
      }
      newState = { ...newState, articles: [...list] }
      return newState;  
    default:
      break;
  };
  return newState;
};

export default rootReducer;