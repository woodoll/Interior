import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CodesAllList from 'user/master/components/codes/CodesAllList';
import { actInitialize } from 'user/master/reducers/codes/MasterCodeReducer';
import { actChangeFiled } from 'user/master/reducers/codes/MasterCodeReducer';
import { actPostProduct } from 'user/master/reducers/codes/MasterCodeReducer';
import { actGetProduct } from 'user/master/reducers/codes/MasterCodeReducer';
import { actGetManufacturer } from 'user/master/reducers/codes/MasterCodeReducer';
import { actPostManufacturer } from 'user/master/reducers/codes/MasterCodeReducer';
import { actMasterCheck } from 'user/master/reducers/codes/MasterCodeReducer';
import { actDeleteCode } from 'user/master/reducers/codes/MasterCodeReducer';
import { actPutProduct } from 'user/master/reducers/codes/MasterCodeReducer';
import { actPutManufacturer } from 'user/master/reducers/codes/MasterCodeReducer';

const mapStateToProps = (store) => ({
  productCode: store.MasterCodeReducer.productCode,
  name: store.MasterCodeReducer.name,
  nameCheck: store.MasterCodeReducer.nameCheck,
  manufacturerCode: store.MasterCodeReducer.manufacturerCode,
  productType: store.MasterCodeReducer.productType,
  password: store.MasterCodeReducer.password,
  postSuccess: store.MasterCodeReducer.postSuccess,
  masterCheck: store.MasterCodeReducer.masterCheck,
  deleteCode: store.MasterCodeReducer.deleteCode,
});

const mapDispatchToProps = (dispatch) => ({
  disInitialize: () => dispatch(actInitialize()),
  disChange: (value, name) => dispatch(actChangeFiled({ key: name, value })),
  disPostProductCode: (name) => dispatch(actPostProduct(name)),
  disGetProductCode: () => dispatch(actGetProduct()),
  disGetManufacturerCode: () => dispatch(actGetManufacturer()),
  disPostManufacturerCode: (productType, name) =>
    dispatch(actPostManufacturer(productType, name)),
  disMasterCheck: (password) => dispatch(actMasterCheck(password)),
  disPutProductCode: (uuid, useYn) => dispatch(actPutProduct(uuid, useYn)),
  disPutManufacturerCode: (uuid, useYn) =>
    dispatch(actPutManufacturer(uuid, useYn)),
  disDeleteCode: () => dispatch(actDeleteCode()),
});

const MasterCodeContainer = ({
  productCode,
  name,
  nameCheck,
  manufacturerCode,
  productType,
  masterCheck,
  postSuccess,
  password,
  deleteCode,
  disInitialize,
  disChange,
  disPostProductCode,
  disGetProductCode,
  disGetManufacturerCode,
  disPostManufacturerCode,
  disMasterCheck,
  disDeleteCode,
  disPutProductCode,
  disPutManufacturerCode,
}) => {
  useEffect(() => {
    disInitialize();
    disGetProductCode();
    disGetManufacturerCode();
  }, []);

  useEffect(() => {
    disGetProductCode();
    disGetManufacturerCode();
  }, [postSuccess]);

  return (
    <CodesAllList
      productCode={productCode}
      name={name}
      nameCheck={nameCheck}
      manufacturerCode={manufacturerCode}
      productType={productType}
      password={password}
      masterCheck={masterCheck}
      disChange={disChange}
      disPostProductCode={disPostProductCode}
      disPostManufacturerCode={disPostManufacturerCode}
      disMasterCheck={disMasterCheck}
      disDeleteCode={disDeleteCode}
      deleteCode={deleteCode}
      disInitialize={disInitialize}
      disGetManufacturerCode={disGetManufacturerCode}
      disGetProductCode={disGetProductCode}
      disPutProductCode={disPutProductCode}
      disPutManufacturerCode={disPutManufacturerCode}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterCodeContainer);
