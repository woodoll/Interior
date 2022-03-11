import React from 'react';

export const Certification = () => {
  const BtnCertificationOnClick = () => {
    const { IMP } = window;
    IMP.init('imp55217089');

    const data = {
      merchant_uid: `mid_${new Date().getTime()}`,
      company: '아임포트',
      carrier: 'SKT',
      name: '홍길동',
      phone: '01012341234',
    };

    IMP.certification(data, callback);
  };

  const callback = (response) => {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert('본인인증 성공');
    } else {
      alert(`본인인증 실패: ${error_msg}`);
    }
  };

  return <button onClick={BtnCertificationOnClick}>본인인증</button>;
};
