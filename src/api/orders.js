import { user } from './createAPI';

//  master API  **********************************

//  vender API  **********************************

export const venderGetOrderList = () => {
  return user.get('/vender/orders/getOrderList');
};

export const venderChangeState = (uuid, orderState) => {
  return user.post('/vender/orders/updateOrderState', { uuid, orderState });
};

//  client API  **********************************
