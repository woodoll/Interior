import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import LoginActions, {
  LoginActionsSaga,
} from '../admin/master/login/LoginActions';

const rootReducer = combineReducers({
  loading,
  LoginActions,
});

export function* rootSaga() {
  yield all([LoginActionsSaga()]);
}

export default rootReducer;
