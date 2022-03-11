import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  changeField,
  initialize,
  login,
} from '../../reducers/login/LoginReducer';
import LoginComponent from '../../components/login/LoginComponent';
import { useNavigate } from 'react-router-dom';

const mapStateToProps = (store) => ({
  userId: store.LoginReducer.userId,
  password: store.LoginReducer.password,
  auth: store.LoginReducer.auth,
  authError: store.LoginReducer.authError,
  error: store.LoginReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(login(userId, password)),
  disChange: (value, name) => dispatch(changeField({ key: name, value })),
  disInitialize: () => dispatch(initialize()),
});

const LoginContainer = ({
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
    <LoginComponent
      userId={userId}
      password={password}
      auth={auth}
      error={error}
      disChange={disChange}
      disLogin={disLogin}
    />
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
