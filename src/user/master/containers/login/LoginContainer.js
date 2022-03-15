/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actChangeField } from 'user/master/reducers/login/LoginReducer';
import { actInitialize } from 'user/master/reducers/login/LoginReducer';
import { actMasterLogin } from 'user/master/reducers/login/LoginReducer';
import { MasterLoginComponent } from 'lib/lib_dir';
/* #endregion */

const mapStateToProps = (store) => ({
  userId: store.MasterLoginReducer.userId,
  password: store.MasterLoginReducer.password,
  auth: store.MasterLoginReducer.auth,
  authError: store.MasterLoginReducer.authError,
  error: store.MasterLoginReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actMasterLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
});

const MasterLoginContainer = ({
  userId,
  password,
  auth,
  error,
  disLogin,
  disChange,
  disInitialize,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    disInitialize();
  }, []);
  useEffect(() => {
    if (auth.msgCode === 'FAIL') {
      console.log('오류 발생');
      console.log(auth.msg);
      return;
    }
    if (auth.msgCode === 'SUCCESS') {
      console.log('로그인 성공');
      navigate('/master');
    }
  }, [auth]);

  return (
    <MasterLoginComponent
      userId={userId}
      password={password}
      auth={auth}
      error={error}
      disChange={disChange}
      disLogin={disLogin}
    />
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MasterLoginContainer);
