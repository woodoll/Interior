/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { Divider, Button, PageHeader } from 'antd';

import { Link } from 'react-router-dom';

import CheckTable from 'lib/common/table/Table_check';
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

const columns = [
  {
    title: '상품번호',
    dataIndex: 'orderNum',
  },
  {
    title: '상품명',
    dataIndex: 'name',
    render: (data) => (
      <div>
        <div>이미지 영역</div>
        <div>텍스트 영역</div>
      </div>
    ),
  },
  {
    title: '운송장번호',
    dataIndex: '',
  },
  {
    title: '주문상태',
    dataIndex: '',
  },
  {
    title: '수량',
    dataIndex: '',
  },
  {
    title: '주문금액',
    dataIndex: '',
  },
];

const Orders_detail = () => {
  return (
    <Orders_detailBlock>
      <PageHeader className="PageHeader" title="주문상세내역" />
      <Divider />
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
      <CheckTable columns={columns} />
      <div style={{ display: 'flex' }}>
        <p>합계</p>
        <p>수량 합계</p>
        <p>주문금액 합계</p>
      </div>
      <div>
        <Button>
          <Link to="/vender/orders/all_list">목록</Link>
        </Button>
        <Button>취소접수</Button>
      </div>
    </Orders_detailBlock>
  );
};

export default Orders_detail;
