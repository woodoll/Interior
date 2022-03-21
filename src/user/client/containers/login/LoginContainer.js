/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actChangeField } from 'user/client/reducers/login/LoginReducer';
import { actInitialize } from 'user/client/reducers/login/LoginReducer';
import { actClientLogin } from 'user/client/reducers/login/LoginReducer';
import { check } from 'lib/reducer/user';
import ClientLoginComponent from 'user/client/components/login/LoginComponent';
/* #endregion */

const mapStateToProps = (store) => ({
  userId: store.ClientLoginReducer.userId,
  password: store.ClientLoginReducer.password,
  auth: store.ClientLoginReducer.auth,
  authError: store.ClientLoginReducer.authError,
  error: store.ClientLoginReducer.error,

  user: store.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actClientLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
  disCheck: () => dispatch(check()),
});

const ClientLoginContainer = ({
  userId,
  password,
  auth,
  error,
  user,
  disLogin,
  disChange,
  disInitialize,
  disCheck,
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
      disCheck();
    }
  }, [auth]);

  useEffect(() => {
    if (user) {
      navigate('/client');
      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user]);

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
