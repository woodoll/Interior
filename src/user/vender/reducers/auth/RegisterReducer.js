import * as registerAPI from 'api/auth';
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
};

const CHANGE_FILED = 'VenderRegisterReducer/CAHNGE_FILED';
const UPLOAD_FILED = 'VenderRegisterReducer/UPLOAD_FILED';
const INITIALIZE = 'VenderRegisterReducer/INITIALIZE';
const REGISTER = 'VenderRegisterReducer/REGISTER';
const REGISTER_SUCCESS = 'VenderRegisterReducer/REGISTER_SUCCESS';
const REGISTER_FIALURE = 'VenderRegisterReducer/REGISTER_FIALURE';

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
      authResult: e,
    });
  }
  yield put(actFinishLoading(REGISTER));
}

export function* VenderRegisterSaga() {
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
