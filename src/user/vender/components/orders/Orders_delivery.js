/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Input, Select, DatePicker, Button, Divider, Space } from 'antd';
import CheckTable from 'lib/common/Table_check';
/* #endregion */

/* #region  styles */
const Orders_deliveryBlock = styled(Responsive)``;

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

const columns = [
  {
    title: '품목별 주문번호',
    dataIndex: '',
  },
  {
    title: '상품명',
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
  {
    title: '택배사선택',
    dataIndex: '',
  },
  {
    title: '운송장번호',
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
    title: '주문일시',
    dataIndex: '',
  },
];

const Orders_delivery = () => {
  return (
    <Orders_deliveryBlock>
      <h2>배송관리</h2>
      <Form>
        <Space direction="vertical" size={12}>
          <AddSection>
            <p>상세조건</p>
            <Select />
            <Input style={{ width: '200px' }} />
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
      <CheckTable columns={columns} />
      <Divider />
      <CheckTable columns={columns} />
    </Orders_deliveryBlock>
  );
};

export default Orders_delivery;
