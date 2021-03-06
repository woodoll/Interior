/* #region  import  */
import * as loginAPI from 'api/auth';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading } from 'lib/reducer/LoadingReducer';
import { actFinishLoading } from 'lib/reducer/LoadingReducer';
/* #endregion */

const initialState = {
  userId: '',
  password: '',
  auth: {
    message: '',
  },
};

const CHANGE_FIELD = 'MasterLoginReducer/CHANGE_FIELD';
const INITIALIZE = 'MasterLoginReducer/INITIALIZE';
const LOGIN = 'MasterLoginReducer/LOGIN';
const LOGIN_SUCCESS = 'MasterLoginReducer/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'MasterLoginReducer/LOGIN_FAILURE';

export const actChangeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actMasterLogin = ({ userId, password }) => ({
  type: LOGIN,
  userId,
  password,
});

function* loginSaga(action) {
  yield put(actStartLoading(LOGIN));
  try {
    const auth = yield call(loginAPI.masterLogin, action);
    yield put({
      type: LOGIN_SUCCESS,
      auth: auth.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      auth: e.response.data,
    });
  }
  yield put(actFinishLoading(LOGIN));
}

export function* MasterLoginReducerSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

function MasterLoginReducer(state = initialState, action) {
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
        draft.auth = action.auth;
      });
    default:
      return state;
  }
}

export default MasterLoginReducer;
