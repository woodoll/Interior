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
  registration: {
    lastModified: 1632022382000,
    name: '지브리_배경화면_고화질__(64).png',
    percent: 0,
    response: undefined,
    size: 510077,
    status: 'error',
    type: 'image/png',
    uid: 'rc-upload-1651049564491-6',
  },
  passbook: {
    lastModified: 1632022382000,
    name: '지브리_배경화면_고화질__(64).png',
    percent: 0,
    response: undefined,
    size: 510077,
    status: 'error',
    type: 'image/png',
    uid: 'rc-upload-1651049564491-6',
  },
};

const CHANGE_FILED = 'RegisterReducer/CAHNGE_FILED';
const INITIALIZE = 'RegisterReducer/INITIALIZE';
const REGISTER = 'RegisterReducer/REGISTER';
const REGISTER_SUCCESS = 'RegisterReducer/REGISTER_SUCCESS';
const REGISTER_FIALURE = 'RegisterReducer/REGISTER_FIALURE';

export const actChangeFiled = ({ key, value }) => ({
  type: CHANGE_FILED,
  key,
  value,
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
