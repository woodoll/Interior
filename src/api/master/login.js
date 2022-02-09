import { master } from './master';

//  로그인
export const login = ({ userId, password }) => {
  return master.post('/home/masterSignIn', { userId, password }).then((res) => {
    const accessToken = res.headers.authorization;
    master.defaults.headers.common['Authorization'] = `Barer ${accessToken}`;
    return res;
  });
};

//  kakaoLogin
export const kakaoLogin = ({ code }) => {
  return master.post('/home/user_kakao/siginIn', { code });
};
