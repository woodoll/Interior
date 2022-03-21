import * as orderAPI from 'api/orders';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  orders: '',
};

const GET_ORDER_LIST = 'OrderReducer/GET_ORDER_LIST';
const GET_ORDER_LIST_SUCCESS = 'OrderReducer/GET_ORDER_LIST_SUCCESS';
const GET_ORDER_LIST_FAILURE = 'OrderReducer/GET_ORDER_LIST_FAILURE';
const CHANGE_STATE = 'OrderReducer/CHANGE_STATE';
const CHANGE_STATE_SUCCESS = 'OrderReducer/CHANGE_STATE';
const CHANGE_STATE_FAILURE = 'OrderReducer/CHANGE_STATE';

function* getOrderListSaga(action) {
  yield put(actStartLoading(GET_ORDER_LIST));
  try {
    const orderList = yield call(orderAPI.venderGetOrderList, action);
    yield put({
      type: GET_ORDER_LIST_SUCCESS,
      orders: orderList.data,
    });
  } catch (e) {
    yield put({
      type: GET_ORDER_LIST_FAILURE,
      error: true,
    });
  }
  yield put(actFinishLoading(GET_ORDER_LIST));
}

export function* OrderReducerSaga() {
  yield takeLatest(GET_ORDER_LIST, getOrderListSaga);
}

export const actGetOrderList = () => ({
  type: GET_ORDER_LIST,
});

function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDER_LIST_SUCCESS:
      return produce(state, (draft) => {
        draft.orders = action.orders;
      });
    default:
      return state;
  }
}

export default OrderReducer;
