import { user } from './createAPI';

//  품목 등록
export const postProductCode = (name) => {
  return user.post(`/commcodes/product`, name).then((res) => {
    console.log(name);
    return res;
  });
};

//  제조사 등록
export const postManufacturerCode = ({ productType, name }) => {
  return user
    .post(`/commcodes/manufacturer`, { productType, name })
    .then((res) => {
      return res;
    });
};
//  품목 조회
export const getProductCode = () => {
  return user.get(`/commcodes/product`);
};

//  제조사 조회
export const getManufacturerCode = () => {
  return user.get(`/commcodes/manufacturer`);
};

//  품목 수정
export const putProductCode = ({ uuid, useYn }) => {
  return user.put(`/commcodes/product`, { uuid, useYn });
};

//  제조사 수정
export const putManufacturerCode = ({ uuid, useYn }) => {
  return user.put(`/commcodes/manufacturer`, { uuid, useYn });
};

//  마스터 체크
export const postMasterCheck = (password) => {
  return user.post(`/masters/pwverify`, password).then((res) => {
    return res;
  });
};

//  코드 및 제조사 삭제
export const deleteCode = () => {
  return user.delete(`/commcodes/product`);
};
