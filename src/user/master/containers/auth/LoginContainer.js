/* #region  import */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actChangeField } from 'user/master/reducers/auth/MasterLoginReducer';
import { actInitialize } from 'user/master/reducers/auth/MasterLoginReducer';
import { actMasterLogin } from 'user/master/reducers/auth/MasterLoginReducer';
import { check } from 'lib/reducer/user';
import MasterLoginComponent from 'user/master/components/auth/LoginComponent';

/* #endregion */

const mapStateToProps = (store) => ({
  userId: store.MasterLoginReducer.userId,
  password: store.MasterLoginReducer.password,
  auth: store.MasterLoginReducer.auth,

  user: store.userReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  disLogin: (userId, password) => dispatch(actMasterLogin(userId, password)),
  disChange: (value, name) => dispatch(actChangeField({ key: name, value })),
  disInitialize: () => dispatch(actInitialize()),
  disCheck: () => dispatch(check()),
});

const MasterLoginContainer = ({
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
    <MasterLoginComponent
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
)(MasterLoginContainer);
