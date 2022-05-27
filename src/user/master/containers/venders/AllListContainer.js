import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actGetVenders } from 'user/master/reducers/venders/MasterVendersReducer';
import { actPutApprove } from 'user/master/reducers/venders/MasterVendersReducer';
import { actInitailize } from 'user/master/reducers/venders/MasterVendersReducer';
import MasterVenderAllListComponent from 'user/master/components/venders/VendersAllList';

const mapStateToProps = (store) => ({
  venders: store.MasterVendersReducer.venders,
  approvalType: store.MasterVendersReducer.approvalType,
});

const mapDispatchToProps = (dispatch) => ({
  disInitailize: () => dispatch(actInitailize()),
  disGetVender: () => dispatch(actGetVenders()),
  disPutApprove: (uuid, approvalType) =>
    dispatch(actPutApprove(uuid, approvalType)),
});

const MasterVenderAllListContainer = ({
  venders,
  disGetVender,
  disPutApprove,
  setModalData,
  approvalType,
  disInitailize,
}) => {
  useEffect(() => {
    disInitailize();
  }, []);
  useEffect(() => {
    disGetVender(1);
  }, [disGetVender]);
  return (
    <MasterVenderAllListComponent
      venders={venders}
      disPutApprove={disPutApprove}
      setModalData={setModalData}
      approvalType={approvalType}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterVenderAllListContainer);
