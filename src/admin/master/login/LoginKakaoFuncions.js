import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { kakaoLogin } from '../../../api/kakao/OAuth';

const LoginKakaoFunctions = (props) => {
  const dispatch = useDispatch();
  const code = new URL(window.location.href).searchParams.get('code');
  useEffect(async () => {
    await dispatch(kakaoLogin(code));
  }, []);

  return (
    <div>
      코드 받아오기
      {console.log(code)}
      {console.log(kakaoLogin(code))}
    </div>
  );
};

export default LoginKakaoFunctions;
