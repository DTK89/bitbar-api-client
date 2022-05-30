import axios from 'axios';

export const api = axios.create({
  //baseURL: 'https://cloud.bitbar.com', in dev mode adress is set in package.json (Allow Access Control Origin -> workaround)
  baseURL: 'http://localhost:3000',
});

export const endpoints = {
  auth: '/oauth/token',
  runTest: '/api/v2/users/{userId}/run', //left for Id fetch
};
