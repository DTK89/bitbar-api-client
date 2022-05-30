import { api, endpoints } from 'api';
import config from 'testConfig.json';

const runTest = async () => {
  try {
    const response = await api.post(endpoints.runTest, config);
    console.log(response.data);
  } catch (error) {
    console.error(error.response);
  }
};
