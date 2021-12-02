import axios from 'axios';

// Foi utilizado https://cors.bridged.cc antes da api original para configuração do CORS

const api = axios.create({
  baseURL: 'https://thingproxy.freeboard.io/fetch/https://www.receitaws.com.br',
});

export default api;
