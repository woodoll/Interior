import * as registerAPI from 'api/auth';
import * as CodeAPI from 'api/codes';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  userId: '',
  password: '',
  companyNm: '',
  productType: '',
  ceoNm: '',
  businessNb: '',
  businessType: '',
  businessItems: '',
  mailOrderNb: '',
  customerServiceNb: '',
  avlbStartTime: '',
  avlbEndTime: '',
  zipCode: '',
  addr1: '',
  addr2: '',
  managerNm: '',
  managerMobile: '',
  managerEmail: '',
  bankNm: '',
  accountHolder: '',
  accountNb: '',
  registration: '',
  passbook: '',
  authResult: '',
  productTypeList: '',
};

const CHANGE_FILED = 'VenderRegisterReducer/CAHNGE_FILED';
const UPLOAD_FILED = 'VenderRegisterReducer/UPLOAD_FILED';
const INITIALIZE = 'VenderRegisterReducer/INITIALIZE';
const REGISTER = 'VenderRegisterReducer/REGISTER';
const REGISTER_SUCCESS = 'VenderRegisterReducer/REGISTER_SUCCESS';
const REGISTER_FIALURE = 'VenderRegisterReducer/REGISTER_FIALURE';

const GET_PRODUCT_CODE = 'VenderRegisterReducer/GET_PRODUCT_CODE';
const GET_PRODUCT_CODE_SUCCESS =
  'VenderRegisterReducer/GET_PRODUCT_CODE_SUCCESS';
const GET_PRODUCT_CODE_FAILURE =
  'VenderRegisterReducer/GET_PRODUCT_CODE_FAILURE';

export const actGetProductCode = () => ({
  type: GET_PRODUCT_CODE,
});

export const actChangeFiled = ({ key, value }) => ({
  type: CHANGE_FILED,
  key,
  value,
});
export const actUploadFiled = ({ key, files }) => ({
  type: UPLOAD_FILED,
  key,
  files,
});
export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actSubmit = ({ formData }) => ({
  type: REGISTER,
  formData,
});

function* getProductCodeSaga(action) {
  yield put(actStartLoading(GET_PRODUCT_CODE));
  try {
    const productTypeList = yield call(CodeAPI.getProductCode, action);
    yield put({
      type: GET_PRODUCT_CODE_SUCCESS,
      productTypeList: productTypeList.data,
    });
  } catch (e) {
    yield put({
      type: GET_PRODUCT_CODE_FAILURE,
      productTypeList: e.response.data,
    });
  }
  yield put(actFinishLoading(GET_PRODUCT_CODE));
}

function* registerSaga(action) {
  yield put(actStartLoading(REGISTER));
  try {
    const register = yield call(registerAPI.venderRegister, action);
    yield put({
      type: REGISTER_SUCCESS,
      authResult: register.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FIALURE,
      authResult: e.response.data,
    });
  }
  yield put(actFinishLoading(REGISTER));
}

export function* VenderRegisterSaga() {
  yield takeLatest(GET_PRODUCT_CODE, getProductCodeSaga);
  yield takeLatest(REGISTER, registerSaga);
}

function VenderRegisterReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FILED:
      return produce(state, (draft) => {
        draft[action.key] = action.value;
      });
    case UPLOAD_FILED:
      return produce(state, (draft) => {
        draft[action.key] = action.files;
        console.log(action.files);
      });
    case GET_PRODUCT_CODE_SUCCESS:
      return produce(state, (draft) => {
        draft.productTypeList = action.productTypeList.data.list;
      });
    case REGISTER_SUCCESS:
      return produce(state, (draft) => {
        draft.authResult = action.authResult;
      });
    case REGISTER_FIALURE:
      return produce(state, (draft) => {
        draft.authResult = action.authResult;
      });
    default:
      return state;
  }
}

export default VenderRegisterReducer;
