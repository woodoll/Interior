import * as paymentAPI from 'api/payment';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  merchant_uid: '',
  name: '',
  amount: '',
  pay_method: '',
  buyerName: '',
  buyerTel: '',
  buyerEmail: '',
  buyerPostCode: '',
  buyerAddr: '',
  product: [
    {
      productCode: '',
      consumerPrice: '',
      orderQty: '',
    },
  ],
  error: '',
};

const INITIALIZE = 'paymentReducer/INITIALIZE';
const PAYMENT = 'paymentReducer/PAYMENT';
const PAYMENT_SUCCESS = 'paymentReducer/PAYMENT_SUCCESS';
const PAYMENT_FAILURE = 'paymentReducer/PAYMENT_FAILURE';

export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});

export const actPayment = ({
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
}) => ({
  type: PAYMENT,
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

function* paymentSaga(action) {
  yield put(actStartLoading(PAYMENT));
  try {
    const payment = yield call(paymentAPI.paymentVerify, action);
    yield put({
      type: PAYMENT_SUCCESS,
      payment: payment.data,
    });
  } catch (e) {
    yield put({
      type: PAYMENT_FAILURE,
      error: true,
      error: e,
    });
  }
  yield put(actFinishLoading(PAYMENT));
}

export function* paymentReducerSaga() {
  yield takeLatest(PAYMENT, paymentSaga);
}

function paymentReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case PAYMENT_SUCCESS:
      return produce(state, (draft) => {
        draft.merchant_uid = action.merchant_uid;
        draft.name = action.name;
        draft.amount = action.amount;
        draft.pay_method = action.pay_method;
        draft.buyerName = action.buyerName;
        draft.buyerTel = action.buyerTel;
        draft.buyerEmail = action.buyerEmail;
        draft.buyerPostCode = action.buyerPostCode;
        draft.buyerAddr = action.buyerAddr;
        draft.product = action.product;
      });
    case PAYMENT_FAILURE:
      return produce(state, (draft) => {
        draft.error = action.error;
      });
    default:
      return state;
  }
}

export default paymentReducer;
