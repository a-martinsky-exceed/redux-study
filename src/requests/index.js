import axios from 'axios';
const url = process.env.REACT_APP_API_URL;

const fetchAll = async() => await axios.get(`${url}/articles/`);
const createDBArticle = async (data) => await axios.post(`${url}/articles/add`, {data})
const updateDBArticle = async (_id, data) => await axios.post(`${url}/articles/update`, {_id, data});
const deleteDBArticle = async (_id) => await axios.post(`${url}/articles/update`, _id)

export {fetchAll, createDBArticle, updateDBArticle, deleteDBArticle}
