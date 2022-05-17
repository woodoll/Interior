import * as goodsAPI from 'api/goods';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  goods: '',
};

const GET_GOODS = 'GetGoodsReducer/GET_GOODS';
const GET_GOODS_SUCCESS = 'GetGoodsReducer/GET_GOODS_SUCCESS';
const GET_GOODS_FAILURE = 'GetGoodsReducer/GET_GOODS_FAILURE';
const INITIALIZE = 'GetGoodsReducer/INITIALIZE';

export const initialize = () => ({
  type: INITIALIZE,
  initialState,
});

export const getGoods = () => ({
  type: GET_GOODS,
});

function* getGoodsSaga(action) {
  yield put(actStartLoading(GET_GOODS));
  try {
    const getGoods = yield call(goodsAPI.getGoods, action);
    yield put({
      type: GET_GOODS_SUCCESS,
      goods: getGoods.data,
    });
  } catch (e) {
    yield put({
      type: GET_GOODS_FAILURE,
      error: true,
      goods: e,
    });
  }
  yield put(actFinishLoading(GET_GOODS));
}

export function* GoodsSaga() {
  yield takeLatest(GET_GOODS, getGoodsSaga);
}

function GetGoodsReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case GET_GOODS_SUCCESS:
      return produce(state, (draft) => {
        draft.goods = action.goods.data.list;
      });
    default:
      return state;
  }
}

export default GetGoodsReducer;
