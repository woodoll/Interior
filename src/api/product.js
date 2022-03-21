import { user } from './createAPI';

export const clientGetProductList = (page) => {
  return user.get(`/home/goods/getAllList?page=${page}`);
};
