import React from 'react';
import { paymentVerify, paymentVerifyFail } from 'api/payment';

export const IamportVbank = ({
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
      pay_method: 'vbank',
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
    const pay_method = 'vbank';
    const buyerName = buyer_name;
    const buyerTel = buyer_tel;
    const buyerEmail = buyer_email;
    const buyerPostCode = buyer_postcode;
    const buyerAddr = buyer_addr;
    const product = [
      {
        productCode: productCode,
        consumerPrice: `${amount}`,
        orderQty: '1',
      },
    ];
    if (success) {
      paymentVerify({
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
      alert('결제성공');
    } else {
      paymentVerifyFail(merchant_uid);
      alert(`결제실패: ${error_msg}`);
    }
  };

  return <button onClick={BtnPaymentOnClick}>가상계좌</button>;
};

// import React from 'react';
// import { paymentVerify, paymentVerifyFail } from 'api/payment';

// export const IamportVbank = ({
//   amount,
//   name,
//   buyerName,
//   buyerTel,
//   buyerEmail,
//   buyerAddr,
//   buyerPostCode,
//   productCode,
//   disInitialize,
//   disPayment,
// }) => {
//   const BtnPaymentOnClick = () => {
//     const { IMP } = window;
//     IMP.init('imp55217089');

//     const data = {
//       pg: 'INIpayTest',
//       pay_method: 'vbank',
//       merchant_uid: `mid_${new Date().getTime()}`,
//       amount: amount,
//       name: name,
//       buyer_name: buyerName,
//       buyer_tel: buyerTel,
//       buyer_email: buyerEmail,
//       buyer_addr: buyerAddr,
//       buyer_postcode: buyerPostCode,
//     };

//     IMP.request_pay(data, callback);
//   };

//   const callback = (response) => {
//     console.log(response);
//     const { merchant_uid, success, error_msg, pay_method } = response;
//     const buyerName = buyerName;
//     const buyerTel = buyerTel;
//     const buyerEmail = buyerEmail;
//     const buyerPostCode = buyerPostCode;
//     const buyerAddr = buyerAddr;
//     const product = [
//       {
//         productCode: productCode,
//         customerPrice: `${amount}`,
//         orderQty: '1',
//       },
//     ];
//     if (success) {
//       console.log(product);
//       disPayment(
//         merchant_uid,
//         name,
//         amount,
//         pay_method,
//         buyerName,
//         buyerTel,
//         buyerEmail,
//         buyerPostCode,
//         buyerAddr,
//         product,
//       );
//       alert('결제성공');
//       disInitialize();
//     } else {
//       paymentVerifyFail(merchant_uid);
//       alert(`결제실패: ${error_msg}`);
//     }
//   };

//   return <button onClick={BtnPaymentOnClick}>가상계좌</button>;
// };
