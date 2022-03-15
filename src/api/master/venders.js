import { master } from './master';

//  판매사 조회
export const getVender = (page) => {
  return master.get(`/master/venders/getApproveList?page=${page}`);
};

//  판매사 승인
export const putApprove = (userId) => {
  return master.put(`/master/venders/venderApprove`, { userId });
};
