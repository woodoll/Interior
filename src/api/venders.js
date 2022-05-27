import { user } from './createAPI';

//  판매사 조회
export const getVender = (page) => {
  return user.get(`/venders`);
};

//  판매사 승인
export const putApprove = ({ uuid, approvalType }) => {
  return user.put(`/venders/${uuid}/approval`, { uuid, approvalType });
};
