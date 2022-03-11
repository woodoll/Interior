import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import LoadingReducer from './LoadingReducer';
import LoginReducer, {
  LoginReducerSaga,
} from '../ad-master/reducers/login/LoginReducer';
import VendersReducer, {
  VendersReducerSaga,
} from '../ad-master/reducers/venders/VendersReducer';
import AddReducer, {
  AddReducerSaga,
} from '../ad-vneder/reducers/goods/AddReducer';

const RootReducer = combineReducers({
  LoadingReducer,
  LoginReducer,
  VendersReducer,
  AddReducer,
});

export function* RootSaga() {
  yield all([LoginReducerSaga(), VendersReducerSaga(), AddReducerSaga()]);
}

export default RootReducer;
