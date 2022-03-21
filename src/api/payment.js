import { user } from './createAPI';

//  결제 성공
export const paymentVerify = ({
  merchant_uid,
  name,
  amount,
  pay_method,
  buyerName,
  buyerTel,
  buyerEmail,
  buyerPostCode,
  buyerAddr,
  product,
}) => {
  return user.post('/user/orders/createProductOrder', {
    merchant_uid,
    name,
    amount,
    pay_method,
    buyerName,
    buyerTel,
    buyerEmail,
    buyerPostCode,
    buyerAddr,
    product,
  });
};

//  결제 실패
export const paymentVerifyFail = (merchant_uid) => {
  return user.post('/user/orders/deleteProductOrder', { merchant_uid });
};
