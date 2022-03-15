import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import LoadingReducer from './LoadingReducer';
import MasterLoginReducer, {
  MasterLoginReducerSaga,
} from 'user/master/reducers/login/LoginReducer';
import VendersReducer, {
  VendersReducerSaga,
} from 'user/master/reducers/venders/VendersReducer';
import AddReducer, {
  AddReducerSaga,
} from 'user/vender/reducers/goods/AddReducer';
import ProductReducer, {
  ProductReducerSaga,
} from 'user/client/reducers/product/ProductReducer';
import VenderLoginReducer, {
  VenderLoginReducerSaga,
} from 'user/vender/reducers/login/LoginReducer';
import ClientLoginReducer, {
  ClientLoginReducerSaga,
} from 'user/client/reducers/login/LoginReducer';

const RootReducer = combineReducers({
  LoadingReducer,
  MasterLoginReducer,
  VenderLoginReducer,
  ClientLoginReducer,
  VendersReducer,
  AddReducer,
  ProductReducer,
});

export function* RootSaga() {
  yield all([
    MasterLoginReducerSaga(),
    VenderLoginReducerSaga(),
    ClientLoginReducerSaga(),
    VendersReducerSaga(),
    AddReducerSaga(),
    ProductReducerSaga(),
  ]);
}

export default RootReducer;
