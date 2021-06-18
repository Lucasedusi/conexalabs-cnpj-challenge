import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.receitaws.com.br',
});

export default api;
