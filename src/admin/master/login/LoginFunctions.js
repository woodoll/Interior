import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initialize, login } from './LoginActions';
import LoginForm from './LoginForm';
import { KAKAO_AUTH_URL } from '../../../api/kakao/OAuth';
import { kakaoLogin } from '../../../api/master/login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { userId, password } = useSelector(({ LoginActions }) => ({
    userId: LoginActions.userId,
    password: LoginActions.password,
  }));
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ userId, password }));
  };

  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);

  // useEffect(() => {
  //   if (authError) {
  //     console.log('오류 발생');
  //     console.log(authError);
  //     setError('로그인 실패');
  //     return;
  //   }
  //   if (auth) {
  //     console.log('로그인 성공');
  //     dispatch(check());
  //   }
  // }, [auth, authError, dispatch]);

  // SNS 로그인
  const BtnKakaoOnClick = (e) => {
    window.location.href = `${KAKAO_AUTH_URL}`;
  };

  return (
    <LoginForm
      onChange={onChange}
      userId={userId}
      password={password}
      onSubmit={onSubmit}
      BtnKakaoOnClick={BtnKakaoOnClick}
    />
  );
};
export default withRouter(LoginContainer);
