/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Responsive from 'lib/styles/Responsive';
import { venderChangeState } from 'api/orders';
import Checkbox_all from 'lib/common/Checkbox_all';
import { Divider, Select, Input, DatePicker, Space, Button } from 'antd';
import Table_check from 'lib/common/Table_check';
/* #endregion */

/* #region  styles */
const AllListComponentBlock = styled(Responsive)``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  p {
    width: 100px;
  }

  Select,
  Input {
    width: 100px;
    height: fit-content;
  }
`;
/* #endregion */

const { RangePicker } = DatePicker;

const plainOptions = ['결제완료', '배송지시', '배송중', '배송완료', '구매확정'];
const defaultCheckedList = [
  '결제완료',
  '배송지시',
  '배송중',
  '배송완료',
  '구매확정',
];

const CSplainOptions = [
  '자동취소',
  '고객취소',
  '판매자취소',
  '반품접수',
  '반품중',
  '반품회수완료',
  '교환접수',
  '교환중',
  '교환완료',
];
const CSdefaultCheckedList = [
  '자동취소',
  '고객취소',
  '판매자취소',
  '반품접수',
  '반품중',
  '반품회수완료',
  '교환접수',
  '교환중',
  '교환완료',
];

const columns = [
  {
    title: '주문번호',
    dataIndex: 'orderNum',
  },
  {
    title: '상품명',
    dataIndex: 'name',
  },
  {
    title: '수량',
    dataIndex: '',
  },
  {
    title: '주문금액',
    dataIndex: '',
  },
  {
    title: '주문자명/연락처',
    dataIndex: '',
  },
  {
    title: '수령인/연락처',
    dataIndex: '',
  },
  {
    title: '배송지',
    dataIndex: '',
  },
  {
    title: '주문상태 최종변경일시',
    dataIndex: '',
  },
  {
    title: '주문일시',
    dataIndex: '',
  },
];

const AllListComponent = ({ orders }) => {
  const navigate = useNavigate();
  console.log('orderList = ', orders);
  const state = '03';
  if (orders.result === 'login') {
    navigate('/vender/signIn');
  }
  return (
    <AllListComponentBlock>
      <h2>전체주문리스트</h2>
      <Form>
        <Space direction="vertical" size={12}>
          <Checkbox_all
            plainOptions={plainOptions}
            defaultCheckedList={defaultCheckedList}
          />
          <Checkbox_all
            plainOptions={CSplainOptions}
            defaultCheckedList={CSdefaultCheckedList}
          />
          <AddSection>
            <p>상세조건</p>
            <Select />
            <Input />
          </AddSection>
          <AddSection>
            <p>주문일</p>
            <RangePicker />
          </AddSection>
          <div>
            <Button>검색</Button>
            <Button>초기화</Button>
          </div>
        </Space>
      </Form>
      <Divider />
      <Table_check columns={columns} />
    </AllListComponentBlock>
  );
};

export default AllListComponent;

{
  /* <div>
{orders.map((order, index) => (
  <div key={index}>
    <div>구매 코드 : {order.orderCode}</div>
    <div>구매자 이름 : {order.buyerName}</div>
    <div>구매 날짜 : {order.orderDate}</div>
    <div>상품 코드 : {order.productCode}</div>
    <div>상품 이름 : {order.productName}</div>
    <div>결제 수단 : {order.paymentType}</div>
    <div>구매 상태 : {order.orderState}</div>
    배송 처리하기
    <button onClick={() => venderChangeState(order.uuid, state)}>
      배송
    </button>
    <hr />
  </div>
))}
</div> */
}
