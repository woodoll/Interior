/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actChangeField } from 'user/client/reducers/login/LoginReducer';
import { actInitialize } from 'user/client/reducers/login/LoginReducer';
import { actClientLogin } from 'user/client/reducers/login/LoginReducer';
import { ClientLoginComponent } from 'lib/lib_dir';
/* #endregion */

const mapStateToProps = (store) => ({
  userId: store.LoginReducer.userId,
  password: store.LoginReducer.password,
  auth: store.LoginReducer.auth,
  authError: store.LoginReducer.authError,
  error: store.LoginReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actClientLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
});

const ClientLoginContainer = ({
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
      navigate('/vender');
    }
  }, [auth]);

  return (
    <ClientLoginComponent
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
)(ClientLoginContainer);
