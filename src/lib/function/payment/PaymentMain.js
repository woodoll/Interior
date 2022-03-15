import React from 'react';
import styled from 'styled-components';
import { IamportCard } from './IamportCard';
import { IamportVbank } from './IamportVbank';
import { Certification } from './Certification';
import palette from '../../styles/palette';

const PaymentMainBlock = styled.div`
  background: ${palette.gray[4]};
  padding: 1rem;
  background-color: #fff;
  display: flex;
`;

const Info = styled.div`
  font-size: 1.25rem;
  color: ${palette.gray[7]};
`;

const PaymentMain = () => {
  return (
    <PaymentMainBlock>
      <Info>결제 정보</Info>
      <Info>이름</Info>
      <Info>결제 금액</Info>
      <Info>상품 이름</Info>
      <Info>결제자 번호</Info>
      <Info>결제자 주소</Info>
      <hr />
      <IamportCard></IamportCard>
      <IamportVbank></IamportVbank>
      <Certification />
    </PaymentMainBlock>
  );
};

export default PaymentMain;
