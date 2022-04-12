/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actGetOrderList } from 'user/vender/reducers/orders/OrderReducer';
import AllListComponent from 'user/vender/components/orders/Orders_all_list';
/* #endregion */

const mapStateToProps = (store) => ({
  orders: store.OrderReducer.orders,
});

const mapDispatchToProps = (dispatch) => ({
  disGetOriderList: () => dispatch(actGetOrderList()),
});

const AllListContainer = ({ orders, disGetOriderList }) => {
  useEffect(() => {
    disGetOriderList();
  }, []);

  return <AllListComponent orders={orders} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(AllListContainer);
