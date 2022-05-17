import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import LoadingReducer from './LoadingReducer';
import MasterLoginReducer, {
  MasterLoginReducerSaga,
} from 'user/master/reducers/auth/MasterLoginReducer';
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
} from 'user/vender/reducers/auth/VenderLoginReducer';
import ClientLoginReducer, {
  ClientLoginReducerSaga,
} from 'user/client/reducers/login/LoginReducer';
import userReducer, { userSaga } from './user';
import OrderReducer, {
  OrderReducerSaga,
} from 'user/vender/reducers/orders/OrderReducer';
import GetGoodsReducer, {
  GoodsSaga,
} from 'user/vender/reducers/goods/GetGoodsReducer';
import VenderRegisterReducer, {
  VenderRegisterSaga,
} from 'user/vender/reducers/auth/RegisterReducer';

const RootReducer = combineReducers({
  LoadingReducer,
  MasterLoginReducer,
  VenderLoginReducer,
  ClientLoginReducer,
  VendersReducer,
  AddReducer,
  ProductReducer,
  userReducer,
  OrderReducer,
  GetGoodsReducer,
  VenderRegisterReducer,
});

export function* RootSaga() {
  yield all([
    MasterLoginReducerSaga(),
    VenderLoginReducerSaga(),
    ClientLoginReducerSaga(),
    VendersReducerSaga(),
    AddReducerSaga(),
    ProductReducerSaga(),
    userSaga(),
    OrderReducerSaga(),
    GoodsSaga(),
    VenderRegisterSaga(),
  ]);
}

export default RootReducer;
