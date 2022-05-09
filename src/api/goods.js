import { user } from './createAPI';
import axios from 'axios';

export const addGoods = ({ formData }) => {
  for (const keyValue of formData) console.log(formData);
  return axios.post(`/goods`, formData, {
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `${sessionStorage.getItem('accessToken')}`,
    },
  });
};

export const getGoods = () => {
  return user.get(`/goods`);
};
