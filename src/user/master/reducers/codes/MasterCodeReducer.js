import * as codeAPI from 'api/codes';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  productCode: '',
  name: '',
  nameCheck: '',
  manufacturerCode: '',
  productType: '',
  password: '',
  postSuccess: '',
  masterCheck: '',
  deleteCode: '',
};

const INITIALIZE = 'MasterCodeReducer/INITIALIZE';
const CHANGE_FILED = 'MasterCodeReducer/CHANGE_FILED';

//  품목 등록
const POST_PRODUCT_CODE = 'MasterCodeReducer/POST_PRODUCT_CODE';
const POST_PRODUCT_CODE_SUCCESS = 'MasterCodeReducer/POST_PRODUCT_CODE_SUCCESS';
const POST_PRODUCT_CODE_FAILURE = 'MasterCodeReducer/POST_PRODUCT_CODE_FAILURE';

//  품목 조회
const GET_PRODUCT_CODE = 'MasterCodeReducer/GET_PRODUCT_CODE';
const GET_PRODUCT_CODE_SUCCESS = 'MasterCodeReducer/GET_PRODUCT_CODE_SUCCESS';
const GET_PRODUCT_CODE_FAILURE = 'MasterCodeReducer/GET_PRODUCT_CODE_FAILURE';

//  품목 수정
const PUT_PRODUCT_CODE = '/MasterCodeReducer/PUT_PRODUCT_CODE';
const PUT_PRODUCT_CODE_SUCCESS = '/MasterCodeReducer/PUT_PRODUCT_CODE_SUCCESS';
const PUT_PRODUCT_CODE_FAILURE = '/MasterCodeReducer/PUT_PRODUCT_CODE_FAILURE';

//  제조사 등록
const POST_MANUFACT_CODE = 'MasterCodeReducer/POST_MANUFACT_CODE';
const POST_MANUFACT_CODE_SUCCESS =
  'MasterCodeReducer/POST_MANUFACT_CODE_SUCCESS';
const POST_MANUFACT_CODE_FAILURE =
  'MasterCodeReducer/POST_MANUFACT_CODE_FAILURE';

//  제조사 조회
const GET__MANUFACT_CODE = 'MasterCodeReducer/GET__MANUFACT_CODE';
const GET__MANUFACT_CODE_SUCCESS =
  'MasterCodeReducer/GET__MANUFACT_CODE_SUCCESS';
const GET__MANUFACT_CODE_FAILURE =
  'MasterCodeReducer/GET__MANUFACT_CODE_FAILURE';

//  제조사 수정
const PUT_MAUFACT_CODE = 'MasterCodeReducer/PUT_MAUFACT_CODE';
const PUT_MAUFACT_CODE_SUCCESS = 'MasterCodeReducer/PUT_MAUFACT_CODE_SUCCESS';
const PUT_MAUFACT_CODE_FAILURE = 'MasterCodeReducer/PUT_MAUFACT_CODE_FAILURE';

//  비밀번호 확인
const POST_MASTER_CHECK = 'MasterCodeReducer/POST_MASTER_CHECK';
const POST_MASTER_CHECK_SUCCESS = 'MasterCodeReducer/POST_MASTER_CHECK_SUCCESS';
const POST_MASTER_CHECK_FAILURE = 'MasterCodeReducer/POST_MASTER_CHECK_FAILURE';

//  코드 삭제
const DELETE_CODE = 'MasterCodeReducer/DELETE_CODE';
const DELETE_CODE_SUCCESS = 'MasterCodeReducer/DELETE_CODE_SUCCESS';
const DELETE_CODE_FAILURE = 'MasterCodeReducer/DELETE_CODE_FAILURE';

export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actChangeFiled = ({ key, value }) => ({
  type: CHANGE_FILED,
  key,
  value,
});
export const actGetProduct = () => ({
  type: GET_PRODUCT_CODE,
});

export const actGetManufacturer = () => ({
  type: GET__MANUFACT_CODE,
});

export const actPostProduct = ({ name }) => ({
  type: POST_PRODUCT_CODE,
  name,
});
export const actPostManufacturer = ({ productType, name }) => ({
  type: POST_MANUFACT_CODE,
  name,
  productType,
});

export const actPutProduct = ({ uuid, useYn }) => ({
  type: PUT_PRODUCT_CODE,
  uuid,
  useYn,
});

export const actPutManufacturer = ({ uuid, useYn }) => ({
  type: PUT_MAUFACT_CODE,
  uuid,
  useYn,
});

export const actMasterCheck = ({ password }) => ({
  type: POST_MASTER_CHECK,
  password,
});

export const actDeleteCode = () => ({
  type: DELETE_CODE,
});

function* getProductCodeSaga(action) {
  yield put(actStartLoading(GET_PRODUCT_CODE));
  const productCode = yield call(codeAPI.getProductCode, action);
  try {
    yield put({
      type: GET_PRODUCT_CODE_SUCCESS,
      productCode: productCode.data,
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_CODE_FAILURE,
      productCode: e.response.data,
    });
  }
  yield put(actFinishLoading(GET_PRODUCT_CODE));
}

function* getManufacturerCodeSaga(action) {
  yield put(actStartLoading(GET__MANUFACT_CODE));
  const manufacturerCode = yield call(codeAPI.getManufacturerCode, action);
  try {
    yield put({
      type: GET__MANUFACT_CODE_SUCCESS,
      manufacturerCode: manufacturerCode.data,
    });
  } catch (e) {
    yield put({
      type: GET__MANUFACT_CODE_FAILURE,
      manufacturerCode: e.response.data,
    });
  }
  yield put(actFinishLoading(GET__MANUFACT_CODE));
}

function* postProductCodeSaga(action) {
  yield put(actStartLoading(POST_PRODUCT_CODE));
  const postSuccess = yield call(codeAPI.postProductCode, action);
  try {
    yield put({
      type: POST_PRODUCT_CODE_SUCCESS,
      postSuccess: postSuccess.data,
    });
  } catch (e) {
    yield put({
      type: POST_PRODUCT_CODE_FAILURE,
      postSuccess: e.response.data,
    });
  }
  yield put(actFinishLoading(POST_PRODUCT_CODE));
}

function* postManufacturerCodeSaga(action) {
  yield put(actStartLoading(POST_MANUFACT_CODE));
  const postSuccess = yield call(codeAPI.postManufacturerCode, action);
  try {
    yield put({
      type: POST_MANUFACT_CODE_SUCCESS,
      postSuccess: postSuccess.data,
    });
  } catch (e) {
    yield put({
      type: POST_MANUFACT_CODE_FAILURE,
      postSuccess: e.response.data,
    });
  }
  yield put(actFinishLoading(POST_MANUFACT_CODE));
}

function* postMasterCheckSaga(action) {
  yield put(actStartLoading(POST_MASTER_CHECK));
  const masterCheck = yield call(codeAPI.postMasterCheck, action);
  try {
    yield put({
      type: POST_MASTER_CHECK_SUCCESS,
      masterCheck: masterCheck.data,
    });
  } catch (e) {
    yield put({
      type: POST_MASTER_CHECK_FAILURE,
      masterCheck: e.response.data,
    });
  }
  yield put(actFinishLoading(POST_MASTER_CHECK));
}

function* deleteCodeSaga(action) {
  yield put(actStartLoading(DELETE_CODE));
  const deleteCode = yield call(codeAPI.deleteCode, action);
  try {
    yield put({
      type: DELETE_CODE_SUCCESS,
      deleteCode: deleteCode.data,
    });
  } catch (e) {
    yield put({
      type: DELETE_CODE_FAILURE,
      deleteCode: e,
    });
  }
  yield put(actFinishLoading(DELETE_CODE));
}

function* putProductSaga(action) {
  yield put(actStartLoading(PUT_PRODUCT_CODE));
  const putProduct = yield call(codeAPI.putProductCode, action);
  try {
    yield put({
      type: PUT_PRODUCT_CODE_SUCCESS,
      putProduct: putProduct.data,
    });
  } catch (e) {
    yield put({
      type: PUT_PRODUCT_CODE_FAILURE,
      putProduct: e.response.data,
    });
  }
  yield put(actFinishLoading(PUT_PRODUCT_CODE));
}

function* putManufacturerSaga(action) {
  yield put(actStartLoading(PUT_MAUFACT_CODE));
  const putManufacturer = yield call(codeAPI.putManufacturerCode, action);
  try {
    yield put({
      type: PUT_MAUFACT_CODE_SUCCESS,
      putManufacturer: putManufacturer.data,
    });
  } catch (e) {
    yield put({
      type: PUT_MAUFACT_CODE_FAILURE,
      putManufacturer: e.response.data,
    });
  }
  yield put(actFinishLoading(PUT_MAUFACT_CODE));
}

export function* MasterCodeReducerSaga() {
  yield takeLatest(GET_PRODUCT_CODE, getProductCodeSaga);
  yield takeLatest(GET__MANUFACT_CODE, getManufacturerCodeSaga);
  yield takeLatest(DELETE_CODE, deleteCodeSaga);
  yield takeLatest(POST_MASTER_CHECK, postMasterCheckSaga);
  yield takeLatest(POST_PRODUCT_CODE, postProductCodeSaga);
  yield takeLatest(POST_MANUFACT_CODE, postManufacturerCodeSaga);
  yield takeLatest(PUT_PRODUCT_CODE, putProductSaga);
  yield takeLatest(PUT_MAUFACT_CODE, putManufacturerSaga);
}

function MasterCodeReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FILED:
      return produce(state, (draft) => {
        draft[action.key] = action.value;
      });
    case GET_PRODUCT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.productCode = action.productCode.data.list;
      });
    case GET__MANUFACT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.manufacturerCode = action.manufacturerCode.data.list;
      });
    case POST_MASTER_CHECK_SUCCESS:
      return produce(state, (draft) => {
        draft.masterCheck = action.masterCheck;
      });
    case POST_PRODUCT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.postSuccess = action.postSuccess;
        actInitialize();
      });
    case POST_MANUFACT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.postSuccess = action.postSuccess;
        actInitialize();
      });
    case PUT_PRODUCT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.postSuccess = action.putProduct;
      });
    case PUT_MAUFACT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.postSuccess = action.putManufacturer;
      });
    case DELETE_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.deleteCode = action.deleteCode;
      });
    default:
      return state;
  }
}

export default MasterCodeReducer;
