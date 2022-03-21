import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actInitialize } from './paymentReducer';
import { actPayment } from './paymentReducer';
import { IamportVbank } from './IamportVbank';

const mapStateToProps = (store) => ({
  // merchant_uid: store.paymentReducer.merchant_uid,
  // name: store.paymentReducer.name,
  // amount: store.paymentReducer.amount,
  // pay_method: store.paymentReducer.pay_method,
  // buyerName: store.paymentReducer.buyerName,
  // buyerTel: store.paymentReducer.buyerTel,
  // buyerEmail: store.paymentReducer.buyerEmail,
  // buyerPostCode: store.paymentReducer.buyerPostCode,
  // buyerAddr: store.paymentReducer.buyerAddr,
  // product: store.paymentReducer.product,
  error: store.paymentReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  disInitialize: () => dispatch(actInitialize()),
  disPayment: (
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
  ) =>
    dispatch(
      actPayment(
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
      ),
    ),
});

const IamportVbankContainer = ({
  name,
  amount,
  buyerName,
  buyerTel,
  buyerEmail,
  buyerPostCode,
  buyerAddr,
  disInitialize,
  disPayment,
}) => {
  return (
    <IamportVbank
      name={name}
      amount={amount}
      buyerName={buyerName}
      buyerTel={buyerTel}
      buyerEmail={buyerEmail}
      buyerPostCode={buyerPostCode}
      buyerAddr={buyerAddr}
      disPayment={disPayment}
      disInitialize={disInitialize}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IamportVbankContainer);
