import * as goodsAPI from '../../lib/api/goods';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import {
  actStartLoading,
  actFinishLoading,
} from '../../../Reducer/LoadingReducer';

const formData = new FormData();

const initialState = {
  productType: '',
  originType: '',
  mnfctType: '',
  colorType: '',
  productName: '',
  displayStatus: '',
  normalPrice: '',
  discountRate: '',
  sellingPrice: '',
  stockType: '',
  minQuantity: '',
  maxQuantity: '',
  pointType: '',
  optionYn: '',
  uploadType: '',
  detailContents: '',
  file1: '',
  addProduct: '',
};

const CHANGE_FILED = 'AddReducer/CHANGE_FILED';
const INITIALIZE = 'AddReducer/INITIALIZE';
const ADD_PRODUCT = 'addReducer/ADD_PRODUCT';
const ADD_PRODUCT_SUCCESS = 'addReducer/ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'addReducer/ADD_PRODUCT_FAILURE';

export const changeField = ({ key, value }) => ({
  type: CHANGE_FILED,
  key,
  value,
});
export const initialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actSubmit = ({ formData }) => ({
  type: ADD_PRODUCT,
  formData,
});

function* addProductSaga(action) {
  yield put(actStartLoading(ADD_PRODUCT));
  try {
    const addProduct = yield call(goodsAPI.addGoods, action);
    yield put({
      type: ADD_PRODUCT_SUCCESS,
      addProduct: addProduct.data,
    });
  } catch (e) {
    yield put({
      type: ADD_PRODUCT_FAILURE,
      error: true,
      addProduct: e,
    });
  }
  yield put(actFinishLoading(ADD_PRODUCT));
}

export function* AddReducerSaga() {
  yield takeLatest(ADD_PRODUCT, addProductSaga);
}

function AddReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FILED:
      return produce(state, (draft) => {
        draft[action.key] = action.value;
      });
    case ADD_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.addProduct = action.addProduct;
      });
    default:
      return state;
  }
}

export default AddReducer;
