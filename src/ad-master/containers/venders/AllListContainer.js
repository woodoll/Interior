import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  actGetVenders,
  actPutApprove,
} from '../../reducers/venders/VendersReducer';
import AllList from '../../components/venders/All_list';

const mapStateToProps = (store) => ({
  venders: store.VendersReducer.venders,
});

const mapDispatchToProps = (dispatch) => ({
  disGetVender: (page) => dispatch(actGetVenders(page)),
  disPutApprove: (userId) => dispatch(actPutApprove(userId)),
});

const AllListContainer = ({ venders, disGetVender, disPutApprove }) => {
  useEffect(() => {
    disGetVender(1);
  }, [disGetVender]);
  return <AllList venders={venders} disPutApprove={disPutApprove} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(AllListContainer);
