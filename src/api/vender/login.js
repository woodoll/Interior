import { vender } from './vender';

//  로그인
export const venderLogin = ({ userId, password }) => {
  return vender.post('/home/venderSignIn', { userId, password }).then((res) => {
    localStorage.setItem('token', res.headers.authorization);
    const accessToken = res.headers.authorization;
    vender.defaults.headers.common['Authorization'] = `${accessToken}`;
    return res;
  });
};
