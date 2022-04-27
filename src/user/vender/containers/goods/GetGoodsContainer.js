import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize } from 'user/vender/reducers/goods/GetGoodsReducer';
import { getGoods } from 'user/vender/reducers/goods/GetGoodsReducer';
import Goods_list from 'user/vender/components/goods/Goods_list';

const mapStateToprops = (store) => ({
  goods: store.GetGoodsReducer.goods,
});

const mapDispatchToProps = (dispatch) => ({
  disInitialize: () => dispatch(initialize()),
  disGetGoods: () => dispatch(getGoods()),
});

const GetGoodsContainer = ({
  setPathUrl,
  goods,
  disInitialize,
  disGetGoods,
}) => {
  useEffect(() => {
    disInitialize();
    disGetGoods();
  }, []);
  setPathUrl('상품 목록');
  return <Goods_list goods={goods} />;
};

export default connect(mapStateToprops, mapDispatchToProps)(GetGoodsContainer);
