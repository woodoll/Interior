import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  actGetVenders,
  actPutApprove,
} from '../../reducers/venders/VendersReducer';
import { MasterVenderAllListComponent } from 'lib/lib_dir';

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
