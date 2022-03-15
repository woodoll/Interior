import { clientLogin } from 'lib/lib_dir';
import { call, put, takeLatest } from 'redux-saga/effects';
import produce from 'immer';
import { actStartLoading, actFinishLoading } from 'lib/reducer/LoadingReducer';

const initialState = {
  userId: '',
  password: '',
  auth: '',
  authError: '',
  error: null,
};

const CHANGE_FIELD = 'ClientLoginReducer/CHANGE_FIELD';
const INITIALIZE = 'ClientLoginReducer/INITIALIZE';
const LOGIN = 'ClientLoginReducer/LOGIN';
const LOGIN_SUCCESS = 'ClientLoginReducer/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'ClientLoginReducer/LOGIN_FAILURE';

export const actChangeField = ({ key, value }) => ({
  type: CHANGE_FIELD,
  key,
  value,
});
export const actInitialize = () => ({
  type: INITIALIZE,
  initialState,
});
export const actClientLogin = ({ userId, password }) => ({
  type: LOGIN,
  userId,
  password,
});

function* loginSaga(action) {
  yield put(actStartLoading(LOGIN));
  try {
    const auth = yield call(clientLogin, action);
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

export function* ClientLoginReducerSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

function ClientLoginReducer(state = initialState, action) {
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

export default ClientLoginReducer;
