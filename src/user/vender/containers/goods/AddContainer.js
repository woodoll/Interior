import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeField } from 'user/vender/reducers/goods/AddReducer';
import { uploadFiled } from 'user/vender/reducers/goods/AddReducer';
import { initialize } from 'user/vender/reducers/goods/AddReducer';
import { actSubmit } from 'user/vender/reducers/goods/AddReducer';
import AddComponent from 'user/vender/components/goods/Goods_add';

const mapStateToProps = (store) => ({
  productType: store.AddReducer.productType,
  originType: store.AddReducer.originType,
  mnfctType: store.AddReducer.mnfctType,
  colorType: store.AddReducer.colorType,
  productName: store.AddReducer.productName,
  displayStatus: store.AddReducer.displayStatus,
  normalPrice: store.AddReducer.normalPrice,
  discountRate: store.AddReducer.discountRate,
  sellingPrice: store.AddReducer.sellingPrice,
  stockType: store.AddReducer.stockType,
  minQuantity: store.AddReducer.minQuantity,
  maxQuantity: store.AddReducer.maxQuantity,
  pointType: store.AddReducer.pointType,
  optionYn: store.AddReducer.optionYn,
  uploadType: store.AddReducer.uploadType,
  detailContents: store.AddReducer.detailContents,
  file1: store.AddReducer.file1,
  msgCode: store.AddReducer.msgCode,
});

const mapDispatchToProps = (dispatch) => ({
  disSubmit: (formData) => dispatch(actSubmit(formData)),
  disChange: (value, name) => dispatch(changeField({ key: name, value })),
  disUpload: (files) => dispatch(uploadFiled({ files })),
  disInitialize: () => dispatch(initialize()),
});

const AddContainer = ({
  productType,
  originType,
  mnfctType,
  colorType,
  productName,
  displayStatus,
  normalPrice,
  discountRate,
  sellingPrice,
  stockType,
  minQuantity,
  maxQuantity,
  pointType,
  optionYn,
  uploadType,
  detailContents,
  file1,
  disSubmit,
  disChange,
  disUpload,
  disInitialize,
  msgCode,
}) => {
  useEffect(() => {
    disInitialize();
  }, []);
  return (
    <AddComponent
      productType={productType}
      originType={originType}
      mnfctType={mnfctType}
      colorType={colorType}
      productName={productName}
      displayStatus={displayStatus}
      normalPrice={normalPrice}
      discountRate={discountRate}
      sellingPrice={sellingPrice}
      stockType={stockType}
      minQuantity={minQuantity}
      maxQuantity={maxQuantity}
      pointType={pointType}
      optionYn={optionYn}
      uploadType={uploadType}
      detailContents={detailContents}
      file1={file1}
      disSubmit={disSubmit}
      disChange={disChange}
      disUpload={disUpload}
      msgCode={msgCode}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);
