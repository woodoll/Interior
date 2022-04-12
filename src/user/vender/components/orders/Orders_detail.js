/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { Divider, Button } from 'antd';

import CheckTable from 'lib/common/Table_check';
/* #endregion */

/* #region  styles */
const Orders_detailBlock = styled(Responsive)``;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
  p {
    width: 100px;
  }
`;
/* #endregion */

const Orders_detail = () => {
  return (
    <Orders_detailBlock>
      <h2>주문 상세내역</h2>
      <h3>주문정보</h3>
      <Divider />
      <AddSection>
        <p>주문번호</p>
        <p>주문번호</p>
        <p>주문일시</p>
        <p>주문일시</p>
      </AddSection>
      <AddSection>
        <p>주문자명</p>
        <p>주문자명</p>
        <p>연락처</p>
        <p>연락처</p>
      </AddSection>
      <AddSection>
        <p>주문상태</p>
        <p>주문상태</p>
      </AddSection>
      <h3>배송정보</h3>
      <Divider />
      <AddSection>
        <p>수령인</p>
        <p>수령인</p>
        <p>연락처</p>
        <p>수령인 연락처</p>
      </AddSection>
      <AddSection>
        <p>주소</p>
        <p>주소</p>
        <p>요청사항</p>
        <p>요청사항</p>
      </AddSection>
      <Divider />
      <h3>주문상품</h3>
      <CheckTable />
      <div style={{ display: 'flex' }}>
        <p>합계</p>
        <p>수량 합계</p>
        <p>주문금액 합계</p>
      </div>
      <div>
        <Button>목록</Button>
        <Button>취소접수</Button>
      </div>
    </Orders_detailBlock>
  );
};

export default Orders_detail;
