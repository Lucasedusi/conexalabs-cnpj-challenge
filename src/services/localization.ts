import axios from 'axios';

const localizationApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export default localizationApi;
