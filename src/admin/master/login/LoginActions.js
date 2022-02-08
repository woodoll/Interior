import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../../modules/createRequestSaga';
import * as loginAPI from '../../../api/master/login';

const CHANGE_FIELD = 'LoginActions/CHANGE_FIELD';
const INITIALIZE = 'LoginActions/INITIALIZE';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] =
  createRequestActionTypes('LoginActions/LOGIN');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const initialize = createAction(INITIALIZE);
export const login = createAction(LOGIN, ({ userId, password }) => ({
  userId,
  password,
}));

const loginSaga = createRequestSaga(LOGIN, loginAPI.login);
export function* LoginActionsSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  userId: '',
  password: '',
};
const LoginActions = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      auth,
    }),
  },
  initialState,
);

export default LoginActions;
