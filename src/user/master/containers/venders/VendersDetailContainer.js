import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { actPutApprove } from 'user/master/reducers/venders/MasterVendersReducer';
import { actChangeField } from 'user/master/reducers/venders/MasterVendersReducer';
import { actInitailize } from 'user/master/reducers/venders/MasterVendersReducer';
import VendersDetail from 'user/master/components/venders/VendersDetail';

const mapStateToProps = (store) => ({
  approvalType: store.MasterVendersReducer.approvalType,
  uuid: store.MasterVendersReducer.uuid,
  payload: store.MasterVendersReducer.payload,
});

const mapDispatchToProps = (dispatch) => ({
  disInitailize: () => dispatch(actInitailize()),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disPutApprove: (uuid, approvalType) =>
    dispatch(actPutApprove(uuid, approvalType)),
});

const VenderDetailContainer = ({
  payload,
  approvalType,
  disPutApprove,
  uuid,
  modalData,
  disChange,
  disInitailize,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    disInitailize();
  }, []);
  useEffect(() => {
    if (payload.message === '승인상태 변경 완료') {
      navigate('/master/venders/all_list');
      message.success('상태변경이 완료되었습니다.');
    }
  }, [payload]);
  return (
    <VendersDetail
      payload={payload}
      approvalType={approvalType}
      uuid={uuid}
      disPutApprove={disPutApprove}
      disChange={disChange}
      modalData={modalData}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenderDetailContainer);
