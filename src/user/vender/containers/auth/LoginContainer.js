/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actChangeField } from 'user/vender/reducers/auth/VenderLoginReducer';
import { actInitialize } from 'user/vender/reducers/auth/VenderLoginReducer';
import { actVenderLogin } from 'user/vender/reducers/auth/VenderLoginReducer';
import { check } from 'lib/reducer/user';
import VenderLoginComponent from 'user/vender/components/auth/LoginComponent';

/* #endregion */

const mapStateToProps = (store) => ({
  userId: store.VenderLoginReducer.userId,
  password: store.VenderLoginReducer.password,
  auth: store.VenderLoginReducer.auth,

  user: store.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actVenderLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
  disCheck: () => dispatch(check()),
});

const VenderLoginContainer = ({
  userId,
  password,
  auth,
  disLogin,
  disChange,
  disInitialize,
  disCheck,
}) => {
  useEffect(() => {
    disInitialize();
  }, []);

  useEffect(() => {
    if (auth.message === '존재하지 않는 사용자') {
      console.log('존재하지 않는 사용자');
      return;
    }
    if (auth.message === '비밀번호 오류') {
      console.log('비밀번호 오류');
      return;
    }
    if (auth.message === '승인되지 않은 계정') {
      console.log('승인되지 않은 계정');
      return;
    }
    if (auth.message === '로그인 성공') {
      console.log('로그인 성공');
      const authUser = auth.data;
      sessionStorage.setItem('user', JSON.stringify(authUser));
      disCheck();
    }
  }, [auth]);

  // useEffect(() => {
  //   if (localStorage.getItem('user')) {
  //     navigate('/vender');
  //     try {
  //       localStorage.setItem('user', JSON.stringify(auth));
  //       sessionStorage.setItem('user', JSON.stringify(auth));
  //     } catch (e) {
  //       console.log('localStorage is not working');
  //     }
  //   }
  // });

  return (
    <VenderLoginComponent
      userId={userId}
      password={password}
      auth={auth}
      disChange={disChange}
      disLogin={disLogin}
    />
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VenderLoginContainer);
