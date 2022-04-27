import { user } from './createAPI';

export const addGoods = ({ formData }) => {
  for (const keyValue of formData) console.log(keyValue);
  return user.post(`/vender/goods/goodsAdd`, formData, {
    data: FormData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const getGoods = () => {
  return user.get(`/vender/goods/getAllList?page=1`);
};
