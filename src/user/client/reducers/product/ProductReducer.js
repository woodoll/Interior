/* #region  import */
import * as productAPI from 'api/product';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';
/* #endregion */

const initialState = {
  products: '',
  payload: '',
};

const GET_PRODUCT = 'ProductReducer/GET_PRODUCT';
const GET_PRODUCT_SUCCESS = 'ProductReducer/GET_PRODUCT_SUCCESS';
const GET_PRODUCT_FAILURE = 'ProductReducer/GET_PRODUCT_FAILURE';

export const actGetProduct = (page) => ({ type: GET_PRODUCT, page });

function* getProductSaga(action) {
  yield put(actStartLoading(GET_PRODUCT));
  try {
    const products = yield call(productAPI.clientGetProductList, action.page);
    yield put({
      type: GET_PRODUCT_SUCCESS,
      products: products.data,
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_FAILURE,
      error: true,
      payload: e,
    });
  }
  yield put(actFinishLoading(GET_PRODUCT));
}

export function* ProductReducerSaga() {
  yield takeLatest(GET_PRODUCT, getProductSaga);
}

function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.products = action.products;
      });
    default:
      return state;
  }
}

export default ProductReducer;
