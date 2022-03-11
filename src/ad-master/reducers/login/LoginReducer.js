import * as loginAPI from '../../lib/api/login';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import {
  actStartLoading,
  actFinishLoading,
} from '../../../Reducer/LoadingReducer';

const initialState = {
  userId: '',
  password: '',
  auth: '',
  authError: '',
  error: null,
};

const CHANGE_FIELD = 'LoginReducer/CHANGE_FIELD';
const INITIALIZE = 'LoginReducer/INITIALIZE';
const LOGIN = 'LoginReducer/LOGIN';
const LOGIN_SUCCESS = 'LoginReducer/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LoginReducer/LOGIN_FAILURE';

export const changeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const initialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const login = ({ userId, password }) => ({
  type: LOGIN,
  userId,
  password,
});

function* loginSaga(action) {
  yield put(actStartLoading(LOGIN));
  try {
    const auth = yield call(loginAPI.login, action);
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

export function* LoginReducerSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

function LoginReducer(state = initialState, action) {
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
    default:
      return state;
  }
}

export default LoginReducer;
