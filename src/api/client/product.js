import { client } from './client';

export const clientGetProductList = (page) => {
  return client.get(`/home/goods/getAllList?page=${page}`);
};
