/* #region  import */
import * as loginAPI from 'api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';
/* #endregion */

const initialState = {
  userId: '',
  password: '',
  auth: '',
  authError: null,
  error: null,
};

const CHANGE_FIELD = 'LoginReducer/CHANGE_FIELD';
const INITIALIZE = 'LoginReducer/INITIALIZE';
const LOGIN = 'LoginReducer/LOGIN';
const LOGIN_SUCCESS = 'LoginReducer/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LoginReducer/LOGIN_FAILURE';

export const actChangeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actVenderLogin = ({ userId, password }) => ({
  type: LOGIN,
  userId,
  password,
});

function* loginSaga(action) {
  yield put(actStartLoading(LOGIN));
  try {
    const auth = yield call(loginAPI.venderLogin, action);
    yield put({
      type: LOGIN_SUCCESS,
      auth: auth.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      error: true,
      authError: e,
    });
  }
  yield put(actFinishLoading(LOGIN));
}

export function* VenderLoginReducerSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

function VenderLoginReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return initialState;
    case CHANGE_FIELD:
      return produce(state, (draft) => {
        draft[action.key] = action.value;
      });
    case LOGIN_SUCCESS:
      return produce(state, (draft) => {
        draft.auth = action.auth;
      });
    case LOGIN_FAILURE:
      return produce(state, (draft) => {
        draft.auth = null;
        draft.authError = action.error;
      });
    default:
      return state;
  }
}

export default VenderLoginReducer;
