import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actChangeFiled } from 'user/vender/reducers/auth/RegisterReducer';
import { actUploadFiled } from 'user/vender/reducers/auth/RegisterReducer';
import { actInitialize } from 'user/vender/reducers/auth/RegisterReducer';
import { actSubmit } from 'user/vender/reducers/auth/RegisterReducer';
import VenderRegisterComponent_2 from 'user/vender/components/auth/RegisterComponent_2';

const mapStateToProps = (store) => ({
  userId: store.VenderRegisterReducer.userId,
  password: store.VenderRegisterReducer.password,
  companyNm: store.VenderRegisterReducer.companyNm,
  productType: store.VenderRegisterReducer.productType,
  ceoNm: store.VenderRegisterReducer.ceoNm,
  businessNb: store.VenderRegisterReducer.businessNb,
  businessType: store.VenderRegisterReducer.businessType,
  businessItems: store.VenderRegisterReducer.businessItems,
  mailOrderNb: store.VenderRegisterReducer.mailOrderNb,
  customerServiceNb: store.VenderRegisterReducer.customerServiceNb,
  avlbStartTime: store.VenderRegisterReducer.avlbStartTime,
  avlbEndTime: store.VenderRegisterReducer.avlbEndTime,
  zipCode: store.VenderRegisterReducer.zipCode,
  addr1: store.VenderRegisterReducer.addr1,
  addr2: store.VenderRegisterReducer.addr2,
  managerNm: store.VenderRegisterReducer.managerNm,
  managerMobile: store.VenderRegisterReducer.managerMobile,
  managerEmail: store.VenderRegisterReducer.managerEmail,
  bankNm: store.VenderRegisterReducer.bankNm,
  accountHolder: store.VenderRegisterReducer.accountHolder,
  accountNb: store.VenderRegisterReducer.accountNb,
  registration: store.VenderRegisterReducer.registration,
  passbook: store.VenderRegisterReducer.passbook,
  authResult: store.VenderRegisterReducer.authResult,
});

const mapDispatchToProps = (dispatch) => ({
  disSubmit: (formData) => dispatch(actSubmit(formData)),
  disChange: (value, name) => dispatch(actChangeFiled({ key: name, value })),
  disUpload: (files, name) => dispatch(actUploadFiled({ key: name, files })),
  disInitialize: () => dispatch(actInitialize()),
});

const VenderRegisterContainer = ({
  userId,
  password,
  companyNm,
  productType,
  ceoNm,
  businessNb,
  businessType,
  businessItems,
  mailOrderNb,
  customerServiceNb,
  avlbStartTime,
  avlbEndTime,
  zipCode,
  addr1,
  addr2,
  managerNm,
  managerMobile,
  managerEmail,
  bankNm,
  accountHolder,
  accountNb,
  registration,
  passbook,
  disSubmit,
  disChange,
  disInitialize,
  disUpload,
  next,
  authResult,
}) => {
  useEffect(() => {
    disInitialize();
  }, []);
  return (
    <VenderRegisterComponent_2
      userId={userId}
      password={password}
      companyNm={companyNm}
      productType={productType}
      ceoNm={ceoNm}
      businessNb={businessNb}
      businessType={businessType}
      businessItems={businessItems}
      mailOrderNb={mailOrderNb}
      customerServiceNb={customerServiceNb}
      avlbStartTime={avlbStartTime}
      avlbEndTime={avlbEndTime}
      zipCode={zipCode}
      addr1={addr1}
      addr2={addr2}
      managerNm={managerNm}
      managerMobile={managerMobile}
      managerEmail={managerEmail}
      bankNm={bankNm}
      accountHolder={accountHolder}
      accountNb={accountNb}
      registration={registration}
      passbook={passbook}
      disSubmit={disSubmit}
      disChange={disChange}
      disUpload={disUpload}
      next={next}
      authResult={authResult}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenderRegisterContainer);
