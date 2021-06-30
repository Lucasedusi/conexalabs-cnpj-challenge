import axios from 'axios';

const localization = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
});

export default localization;
