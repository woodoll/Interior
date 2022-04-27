/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actChangeField } from 'user/vender/reducers/auth/LoginReducer';
import { actInitialize } from 'user/vender/reducers/auth/LoginReducer';
import { actVenderLogin } from 'user/vender/reducers/auth/LoginReducer';
import { check } from 'lib/reducer/user';
import VenderLoginComponent from 'user/vender/components/auth/LoginComponent';
/* #endregion */

const mapStateToProps = (store) => ({
<<<<<<< HEAD:src/user/vender/containers/auth/LoginContainer.js
  userId: store.VenderLoginReducer.userId,
  password: store.VenderLoginReducer.password,
  auth: store.VenderLoginReducer.auth,
  error: store.VenderLoginReducer.error,
=======
  userId: store.MasterLoginReducer.userId,
  password: store.MasterLoginReducer.password,
  auth: store.MasterLoginReducer.auth,
  authError: store.MasterLoginReducer.authError,
  error: store.MasterLoginReducer.error,
>>>>>>> parent of 872dc29 (04/12):src/user/vender/containers/login/LoginContainer.js

  user: store.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actVenderLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
  disCheck: () => dispatch(check()),
});

const MasterLoginContainer = ({
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
      navigate('/vender');
    }
  }, [auth]);

  useEffect(() => {
    if (user) {
      navigate('/vender');
      try {
        localStorage.setItem('user', JSON.stringify(user));
        sessionStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [user]);

  return (
    <VenderLoginComponent
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
