import { master } from './master';

//  로그인
export const masterLogin = ({ userId, password }) => {
  return master.post('/home/masterSignIn', { userId, password }).then((res) => {
    localStorage.setItem('token', res.headers.authorization);
    const accessToken = res.headers.authorization;
    master.defaults.headers.common['Authorization'] = `${accessToken}`;
    return res;
  });
};
