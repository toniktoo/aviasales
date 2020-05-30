import axios from 'axios';

export const fetchApi = async (URL) => {
  const response = await axios.get(URL);
  return response;
};
