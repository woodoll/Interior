import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actFinishLoading, actStartLoading } from './LoadingReducer';

const initialState = {
  user: null,
  checkError: null,
};

const TEMP_SET_USER = 'user/TEMP_SET_USER';
const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';
const LOGOUT = 'user/LOGOUT';

export const tempSetUser = ({ user }) => ({
  type: TEMP_SET_USER,
  user,
});

export const check = () => ({
  type: CHECK,
});

export const logout = () => ({
  type: LOGOUT,
});

function checkFailureSaga() {
  try {
    sessionStorage.removeItem('user');
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}

function* checkSaga() {
  yield put(actStartLoading(CHECK));
  const check = sessionStorage.getItem('user');
  try {
    yield put({
      type: CHECK_SUCCESS,
      user: check,
    });
  } catch (e) {
    yield put({
      type: CHECK_FAILURE,
      error: true,
      checkError: e,
    });
  }
  yield put(actFinishLoading(CHECK));
}

function* logoutSaga() {
  try {
    yield call(sessionStorage.removeItem('user'));
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case TEMP_SET_USER:
      return produce(state, (draft) => {
        draft.user = action.user;
      });
    case CHECK_SUCCESS:
      return produce(state, (draft) => {
        draft.user = action.user;
        draft.checkError = null;
      });
    case CHECK_FAILURE:
      return produce(state, (draft) => {
        draft.user = null;
        draft.checkError = action.error;
      });
    case LOGOUT:
      return produce(state, (draft) => {
        draft.user = null;
      });
    default:
      return state;
  }
}

export default userReducer;
