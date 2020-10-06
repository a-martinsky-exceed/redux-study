import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

const fetchAll = async() => await axios.get(`${url}/articles/`);
// test case
const fetch100 = async() => {
  const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return posts.data.map(item => ({...item, _id: item.id}));
};

const createDBArticle = async (data) => await axios.post(`${url}/articles/add`, data);
const updateDBArticle = async (_id, data) => (await axios.post(`${url}/articles/update`, {_id, data}));
const deleteDBArticle = async (_id) => await axios.post(`${url}/articles/delete`, _id);

const register = async (data) => await axios.post(`${url}/login/register`, data);
const login = async (data) => await axios.post(`${url}/login/`, data);

export {
  fetchAll,
  fetch100, 
  createDBArticle, 
  updateDBArticle, 
  deleteDBArticle,
  register,
  login
}
