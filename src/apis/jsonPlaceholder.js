import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// baseURL: nicht https://jsonplaceholder.typicode.com/posts, sondern ohne posts oder users