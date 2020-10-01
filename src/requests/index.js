import axios from 'axios';
export const fetchAll = async() => await axios.get(`https://jsonplaceholder.typicode.com/posts`);
