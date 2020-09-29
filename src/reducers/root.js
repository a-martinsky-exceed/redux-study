import action_types from '../action_types';
const { ADD_ARTICLE } = action_types;

const initialState = {
  articles: []
}

const rootReducer = (current_state = initialState, action) => {
  const newState = {...current_state};
  switch (action) {
    case ADD_ARTICLE:
      newState.articles = [...newState.articles, action.payload]
      break;
  
    default:
      break;
  };
  return newState;
};

export default rootReducer;