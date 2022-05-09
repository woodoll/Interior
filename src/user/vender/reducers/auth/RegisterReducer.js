import * as registerAPI from 'api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  userId: 'user1',
  password: '1234',
  companyNm: '테스트회사',
  productType: '00',
  ceoNm: '대표자이름',
  businessNb: '1234',
  businessType: '업태',
  businessItems: '업종',
  mailOrderNb: '1234',
  customerServiceNb: '1234',
  avlbStartTime: '0',
  avlbEndTime: '24',
  zipCode: '12345',
  addr1: '주소',
  addr2: '상세주소',
  managerNm: '담당자명',
  managerMobile: '1234',
  managerEmail: 'test@test.com',
  bankNm: '은행명',
  accountHolder: '예금주',
  accountNb: '1234',
  registration: '',
  passbook: '',
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
      register: register.data,
    });
  } catch (e) {
    yield put({
      type: REGISTER_FIALURE,
      error: true,
      register: e,
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
        draft.auth = action.auth;
      });
    case REGISTER_FIALURE:
      return produce(state, (draft) => {
        draft.auth = action.e;
      });
    default:
      return state;
  }
}

export default VenderRegisterReducer;
