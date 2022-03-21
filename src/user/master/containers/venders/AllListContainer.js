import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actGetVenders } from 'user/master/reducers/venders/VendersReducer';
import { actPutApprove } from 'user/master/reducers/venders/VendersReducer';
import MasterVenderAllListComponent from 'user/master/components/venders/All_list';

const mapStateToProps = (store) => ({
  venders: store.VendersReducer.venders,
});

const mapDispatchToProps = (dispatch) => ({
  disGetVender: (page) => dispatch(actGetVenders(page)),
  disPutApprove: (userId) => dispatch(actPutApprove(userId)),
});

const MasterVenderAllListContainer = ({
  venders,
  disGetVender,
  disPutApprove,
}) => {
  useEffect(() => {
    disGetVender(1);
  }, [disGetVender]);
  return (
    <MasterVenderAllListComponent
      venders={venders}
      disPutApprove={disPutApprove}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterVenderAllListContainer);
