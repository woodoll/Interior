import { master } from './master';

//  카드결제
export const paymentVerify = ({ imp_uid, merchant_uid }) => {
  return master.post('/home/payment', { imp_uid, merchant_uid });
};

//  무통장 입금
export const paymentVerifyFail = (merchant_uid) => {
  return master.post('/user/orders/deleteProductOrder', { merchant_uid });
};
