import * as vendersAPI from 'api/master/venders';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading, actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  venders: '',
  approve: '',
  payload: '',
};

const GET_VENDERS = 'VendersReducer/GET_VENDERS';
const GET_VENDERS_SUCCESS = 'VendersReducer/GET_VENDERS_SUCCESS';
const GET_VENDERS_FAILURE = 'VendersReducer/GET_VENDERS_FAILURE';

const PUT_APPROVE = 'VendersReducer/PUT_APPROVE';
const PUT_APPROVE_SUCCESS = 'VendersReducer/PUT_APPROVE_SUCCESS';
const PUT_APPROVE_FAILURE = 'VendersReducer/PUT_APPROVE_FAILURE';

export const actGetVenders = (page) => ({ type: GET_VENDERS, page });
export const actPutApprove = (userId) => ({ type: PUT_APPROVE, userId });

function* getVendersSaga(action) {
  yield put(actStartLoading(GET_VENDERS));
  try {
    const venders = yield call(vendersAPI.getVender, action.page);
    yield put({
      type: GET_VENDERS_SUCCESS,
      venders: venders.data,
    });
  } catch (e) {
    yield put({
      type: GET_VENDERS_FAILURE,
      error: true,
      payload: e,
    });
  }
  yield put(actFinishLoading(GET_VENDERS));
}

function* putApproveSaga(action) {
  console.log(action.userId);
  yield put(actStartLoading(PUT_APPROVE));
  try {
    const approve = yield call(vendersAPI.putApprove, action.userId);
    yield put({
      type: PUT_APPROVE_SUCCESS,
      approve: approve.data,
    });
  } catch (e) {
    yield put({
      type: PUT_APPROVE_FAILURE,
      error: true,
      payload: e,
    });
  }
  yield put(actFinishLoading(PUT_APPROVE));
}

export function* VendersReducerSaga() {
  yield takeLatest(GET_VENDERS, getVendersSaga);
  yield takeLatest(PUT_APPROVE, putApproveSaga);
}

function VendersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_VENDERS_SUCCESS:
      return produce(state, (draft) => {
        draft.venders = action.venders;
      });
    case PUT_APPROVE_SUCCESS:
      return produce(state, (draft) => {
        draft.approve = action.approve;
      });
    default:
      return state;
  }
}

export default VendersReducer;
