import React from 'react';
import { paymentVerify, paymentVerifyFail } from 'api/payment';

export const IamportCard = ({
  amount,
  name,
  buyer_name,
  buyer_tel,
  buyer_email,
  buyer_addr,
  buyer_postcode,
  productCode,
}) => {
  const BtnPaymentOnClick = () => {
    const { IMP } = window;
    IMP.init('imp55217089');

    const data = {
      pg: 'INIpayTest',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: amount,
      name: name,
      buyer_name: buyer_name,
      buyer_tel: buyer_tel,
      buyer_email: buyer_email,
      buyer_addr: buyer_addr,
      buyer_postcode: buyer_postcode,
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    console.log(response);
    const { merchant_uid, success, error_msg } = response;
    const userInfo = localStorage.get('user');
    const pay_method = 'card';
    const buyerName = userInfo.name;
    const buyerTel = '01012345678';
    const buyerEmail = 'example@example.com';
    const buyerPostCode = '1234';
    const buyerAddr = '구매자주소';
    const product = [
      {
        productCode: productCode,
        customerPrice: `${amount}`,
        orderQty: '1',
      },
    ];
    if (success) {
      paymentVerify(
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
      );
      alert('결제성공');
    } else {
      paymentVerifyFail(merchant_uid);
      alert(`결제실패: ${error_msg}`);
    }
  };

  return <button onClick={BtnPaymentOnClick}>카드결제</button>;
};
