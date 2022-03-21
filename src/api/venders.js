import { user } from './createAPI';

//  판매사 조회
export const getVender = (page) => {
  return user.get(`/master/venders/getApproveList?page=${page}`);
};

//  판매사 승인
export const putApprove = (userId) => {
  return user.put(`/master/venders/venderApprove`, { userId });
};
