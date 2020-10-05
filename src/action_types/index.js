const action_types = {
 SET_INITIAL: 'article/set',

 ADD_ARTICLE_STARTED: 'article/add/start',
 ADD_ARTICLE_SUCCESS: 'article/add/success',
 ADD_ARTICLE_FAILED: 'article/add/failed', 

 UPDATE_ARTICLE_STARTED: 'article/update/start',
 UPDATE_ARTICLE_SUCCESS: 'article/update/success',
 UPDATE_ARTICLE_FAILED: 'article/update/failed', 

 DELETE_ARTICLE_STARTED: 'article/delete/start',
 DELETE_ARTICLE_SUCCESS: 'article/delete/success',
 DELETE_ARTICLE_FAILED: 'article/delete/failed', 
 
 FETCH_STARTED: 'fetch/start',
 FETCH_SUCCESS: 'fetch/success',
 FETCH_FAILED: 'fetch/failed'
}

export default action_types;