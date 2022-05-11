import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeField } from 'user/vender/reducers/goods/AddReducer';
import { initialize } from 'user/vender/reducers/goods/AddReducer';
import { actSubmit } from 'user/vender/reducers/goods/AddReducer';
import VenderAddComponent from 'user/vender/components/goods/Goods_add';

const mapStateToProps = (store) => ({
  productType: store.AddReducer.productType,
  manufacturerType: store.AddReducer.manufacturerType,
  productGroupNm: store.AddReducer.productGroupNm,
  searchKeyword: store.AddReducer.searchKeyword,
  displayYn: store.AddReducer.displayYn,
  products: store.AddReducer.products,
  addResult: store.AddReducer.addResult,
});

const mapDispatchToProps = (dispatch) => ({
  disSubmit: (formData) => dispatch(actSubmit(formData)),
  disChange: (value, name) => dispatch(changeField({ key: name, value })),
  disInitialize: () => dispatch(initialize()),
});

const AddContainer = ({
  productType,
  manufacturerType,
  productGroupNm,
  searchKeyword,
  displayYn,
  products,
  addResult,
  disSubmit,
  disChange,
  disInitialize,
  setPathUrl,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    disInitialize();
  }, []);

  useEffect(() => {
    if (addResult.message === '상품등록 성공') {
      navigate('/goods/success');
      disInitialize();
    }
  });
  return (
    <VenderAddComponent
      productType={productType}
      manufacturerType={manufacturerType}
      productGroupNm={productGroupNm}
      searchKeyword={searchKeyword}
      displayYn={displayYn}
      products={products}
      disSubmit={disSubmit}
      disChange={disChange}
      setPathUrl={setPathUrl}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
