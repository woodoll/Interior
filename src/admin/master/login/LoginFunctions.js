import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initialize, login } from './LoginActions';
import LoginForm from './LoginForm';

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

  return (
    <LoginForm
      onChange={onChange}
      userId={userId}
      password={password}
      onSubmit={onSubmit}
    />
  );
};
export default withRouter(LoginContainer);
