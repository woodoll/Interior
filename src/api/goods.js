import axios from 'axios';

export const addGoods = ({ formData }) => {
  for (const keyValue of formData) console.log(keyValue);
  return axios.post(`/vender/goods/saveProduct`, formData, {
    data: FormData,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: localStorage.getItem('token'),
    },
  });
};
