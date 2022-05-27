import * as vendersAPI from 'api/venders';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  venders: '',
  approvalType: '',
  uuid: '',
  payload: '',
};

const GET_VENDERS = 'MasterVendersReducer/GET_VENDERS';
const GET_VENDERS_SUCCESS = 'MasterVendersReducer/GET_VENDERS_SUCCESS';
const GET_VENDERS_FAILURE = 'MasterVendersReducer/GET_VENDERS_FAILURE';

const PUT_APPROVE = 'MasterVendersReducer/PUT_APPROVE';
const PUT_APPROVE_SUCCESS = 'MasterVendersReducer/PUT_APPROVE_SUCCESS';
const PUT_APPROVE_FAILURE = 'MasterVendersReducer/PUT_APPROVE_FAILURE';
const CHANGE_FIELD = 'MasterVendersReducer/CHANGE_FIELD';
const INITIALIZE = 'MasterVendersReducer/INITIALIZE';

export const actGetVenders = (page) => ({ type: GET_VENDERS, page });
export const actPutApprove = ({ uuid, approvalType }) => ({
  type: PUT_APPROVE,
  uuid,
  approvalType,
});
export const actChangeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const actInitailize = () => ({ type: INITIALIZE, initialState });

function* getVendersSaga(action) {
  yield put(actStartLoading(GET_VENDERS));
  const venders = yield call(vendersAPI.getVender, action);
  try {
    yield put({
      type: GET_VENDERS_SUCCESS,
      venders: venders.data,
    });
  } catch (e) {
    yield put({
      type: GET_VENDERS_FAILURE,
      venders: e.response.data,
    });
  }
  yield put(actFinishLoading(GET_VENDERS));
}

function* putApproveSaga(action) {
  yield put(actStartLoading(PUT_APPROVE));
  try {
    const approve = yield call(vendersAPI.putApprove, action);
    yield put({
      type: PUT_APPROVE_SUCCESS,
      payload: approve.data,
    });
  } catch (e) {
    yield put({
      type: PUT_APPROVE_FAILURE,
      payload: e.response.data,
    });
  }
  yield put(actFinishLoading(PUT_APPROVE));
}

export function* MasterVendersReducerSaga() {
  yield takeLatest(GET_VENDERS, getVendersSaga);
  yield takeLatest(PUT_APPROVE, putApproveSaga);
}

function MasterVendersReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FIELD:
      return produce(state, (draft) => {
        draft[action.key] = action.value;
      });
    case GET_VENDERS_SUCCESS:
      return produce(state, (draft) => {
        draft.venders = action.venders.data.list;
      });
    case PUT_APPROVE_SUCCESS:
      return produce(state, (draft) => {
        draft.payload = action.payload;
      });
    default:
      return state;
  }
}

export default MasterVendersReducer;
