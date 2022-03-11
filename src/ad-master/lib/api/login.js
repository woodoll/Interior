import { master } from './master';

//  로그인
export const login = ({ userId, password }) => {
  return master.post('/home/masterSignIn', { userId, password }).then((res) => {
    const accessToken = res.headers.authorization;
    master.defaults.headers.common['Authorization'] = `${accessToken}`;
    return res;
  });
};

//  카카오 로그인
export const kakaoLogin = ({ code }) => {
  return master
    .get('/home/user_kakao/signIn', { params: { code: code } })
    .then((res) => {
      console.log(res);
      const accessToken = res.headers.authorization;
      master.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
    });
};

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_API_KEY;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

//  네이버 로그인
export const naverLogin = ({ code }) => {
  return master
    .get('/home/user_naver/signIn', { params: { code: code } })
    .then((res) => {
      console.log(res);
      const accessToken = res.headers.authorization;
      master.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
    });
};

const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_API_KEY;
const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_URI;

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}`;

//  구글 로그인
export const googleLogin = (res) => {
  return master.post('/home/user_google/signIn', res);
};

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_API_KEY;
const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_URI;

export const GOOGLE_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code`;
