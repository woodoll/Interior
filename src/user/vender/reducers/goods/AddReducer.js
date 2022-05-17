import * as goodsAPI from 'api/goods';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  productType: '',
  manufacturerType: '',
  productGroupNm: '',
  searchKeyword: '',
  displayYn: '',
  products: {
    productNm: '',
    displayOrder: '',
    colorCode: '',
    listPrice: '',
    discountRate: '',
    sellingPrice: '',
    stockYn: '',
    stock: '',
    detailContents: '',
    thumbnail: '',
  },
  addResult: '',
};

const CHANGE_FILED = 'AddReducer/CHANGE_FILED';
const INITIALIZE = 'AddReducer/INITIALIZE';
const ADD_PRODUCT = 'AddReducer/ADD_PRODUCT';
const ADD_PRODUCT_SUCCESS = 'AddReducer/ADD_PRODUCT_SUCCESS';
const ADD_PRODUCT_FAILURE = 'AddReducer/ADD_PRODUCT_FAILURE';

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
      addResult: addProduct.data,
    });
  } catch (e) {
    yield put({
      type: ADD_PRODUCT_FAILURE,
      addResult: e.response.data,
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
        draft.addResult = action.addResult;
      });
    case ADD_PRODUCT_FAILURE:
      return produce(state, (draft) => {
        draft.addResult = action.addResult;
      });
    default:
      return state;
  }
}

export default AddReducer;
