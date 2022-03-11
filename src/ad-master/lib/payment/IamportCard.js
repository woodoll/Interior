import React from 'react';
import { paymentVerify, paymentVerifyFail } from '../api/payment';

export const IamportCard = () => {
  const BtnPaymentOnClick = () => {
    const { IMP } = window;
    IMP.init('imp55217089');

    const data = {
      pg: 'INIpayTest',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: 1000,
      name: '카드결제',
      buyer_name: '홍길동',
      buyer_tel: '01091738551',
      buyer_email: 'wdol97@a2ikorea.com',
      buyer_addr: '신사동 661-16',
      buyer_postcode: '06018',
    };

    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const { imp_uid, merchant_uid, success, error_msg } = response;
    console.log(imp_uid);
    console.log(merchant_uid);

    if (success) {
      paymentVerify(imp_uid, merchant_uid);
      alert('결제완료');
    } else {
      paymentVerifyFail(merchant_uid);
      alert(`결제실패: ${error_msg}`);
    }
  };

  return <button onClick={BtnPaymentOnClick}>카드결제</button>;
};
