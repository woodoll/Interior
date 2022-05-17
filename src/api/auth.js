import { user } from './createAPI';
import axios from 'axios';

//  common API  **********************************

//  상태 체크
export const check = () => user.post('/home/getInfo');

//  로그아웃
export const logout = () => {
  return user.post('/home/logOut').then((res) => {
    user.defaults.headers.common['Authorization'] = null;
    return res;
  });
};

//  master API  **********************************

//  로그인
export const masterLogin = ({ userId, password }) => {
  return user.post('/master/login', { userId, password }).then((res) => {
    const accessToken = res.headers.authorization;
    user.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return res;
  });
};

//  vender API  **********************************

//  로그인
export const venderLogin = ({ userId, password }) => {
  return user.post('/venders/login', { userId, password }).then((res) => {
    const accessToken = res.headers.authorization;
    sessionStorage.setItem('accessToken', accessToken);
    user.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return res;
  });
};

//  회원가입
export const venderRegister = ({ formData }) => {
  for (const keyValue of formData) console.log(formData);
  return axios.post(`/venders`, formData, {
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

//  client API  **********************************

//  로그인
export const clientLogin = ({ userId, password }) => {
  return user.post('/client/login', { userId, password }).then((res) => {
    const accessToken = res.headers.authorization;
    user.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    return res;
  });
};

//  카카오 로그인
export const kakaoLogin = ({ code }) => {
  return user
    .get('/home/user_kakao/signIn', { params: { code: code } })
    .then((res) => {
      console.log(res);
      const accessToken = res.headers.authorization;
      user.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
    });
};

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

//  네이버 로그인
export const naverLogin = ({ code }) => {
  return user
    .get('/home/user_naver/signIn', { params: { code: code } })
    .then((res) => {
      console.log(res);
      const accessToken = res.headers.authorization;
      user.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
    });
};

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_API_KEY;
const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_URI;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;

//  구글 로그인
export const googleLogin = (res) => {
  return user.post('/home/user_google/signIn', res);
};

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_URI;

export const GOOGLE_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code`;
