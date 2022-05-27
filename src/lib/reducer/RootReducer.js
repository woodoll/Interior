/* #region  import */
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import LoadingReducer from './LoadingReducer';
// Master
import MasterLoginReducer, {
  MasterLoginReducerSaga,
} from 'user/master/reducers/auth/MasterLoginReducer';
import MasterVendersReducer, {
  MasterVendersReducerSaga,
} from 'user/master/reducers/venders/MasterVendersReducer';
import MasterCodeReducer, {
  MasterCodeReducerSaga,
} from 'user/master/reducers/codes/MasterCodeReducer';
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
/* #endregion */

const RootReducer = combineReducers({
  LoadingReducer,
  MasterLoginReducer,
  MasterCodeReducer,
  MasterVendersReducer,
  VenderLoginReducer,
  VenderRegisterReducer,
  ClientLoginReducer,
  AddReducer,
  ProductReducer,
  userReducer,
  OrderReducer,
  GetGoodsReducer,
});

export function* RootSaga() {
  yield all([
    MasterLoginReducerSaga(),
    MasterCodeReducerSaga(),
    MasterVendersReducerSaga(),
    VenderLoginReducerSaga(),
    ClientLoginReducerSaga(),
    AddReducerSaga(),
    ProductReducerSaga(),
    userSaga(),
    OrderReducerSaga(),
    GoodsSaga(),
    VenderRegisterSaga(),
  ]);
}

export default RootReducer;
