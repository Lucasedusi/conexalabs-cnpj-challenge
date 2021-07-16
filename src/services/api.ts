import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors.bridged.cc/https://receitaws.com.br',
});

export default api;
