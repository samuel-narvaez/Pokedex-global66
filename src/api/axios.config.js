import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000,
});

export default apiService;