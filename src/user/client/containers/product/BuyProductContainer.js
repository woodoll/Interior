/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actGetProduct } from 'user/client/reducers/product/ProductReducer';
import ClientBuyProductComponent from 'user/client/components/product/BuyProductComponent';
/* #endregion */

const mapStateToProps = (store) => ({
  products: store.ProductReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  disGetProduct: (page) => dispatch(actGetProduct(page)),
});

const ClientBuyProductContainer = ({ products, disGetProduct }) => {
  useEffect(() => {
    disGetProduct(1);
  }, [disGetProduct]);
  return <ClientBuyProductComponent products={products} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientBuyProductContainer);
