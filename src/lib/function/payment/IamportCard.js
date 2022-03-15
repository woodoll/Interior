import React from 'react';
import { paymentVerify, paymentVerifyFail } from '../api/payment';

export const IamportCard = ({
  amount,
  buyer_name,
  buyer_tel,
  buyer_email,
  buyer_addr,
  buyer_postcode,
}) => {
  const BtnPaymentOnClick = () => {
    const { IMP } = window;
    IMP.init('imp55217089');

    const data = {
      pg: 'INIpayTest',
      pay_method: 'card',
      merchant_uid: `mid_${new Date().getTime()}`,
      amount: { amount },
      name: '카드결제',
      buyer_name: { buyer_name },
      buyer_tel: { buyer_tel },
      buyer_email: { buyer_email },
      buyer_addr: buyer_addr,
      buyer_postcode: { buyer_postcode },
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
