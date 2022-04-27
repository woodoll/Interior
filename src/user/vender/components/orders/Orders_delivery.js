/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import {
  Input,
  Select,
  DatePicker,
  Button,
  Divider,
  Space,
  PageHeader,
} from 'antd';
import CheckTable from 'lib/common/table/Table_check';
import SubTabs from 'lib/common/Tabs';
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
    dataIndex: 'input',
    editable: true,
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

const data = [
  {
    name: '상품테스트',
    input: '입력창',
  },
];

const Orders_delivery = ({ setPathUrl }) => {
  setPathUrl('배송관리');
  return (
    <Orders_deliveryBlock>
      <PageHeader className="PageHeader" title="배송관리" />
      <Divider />
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
      <SubTabs
        page1={<CheckTable columns={columns} data={data} />}
        page2={<CheckTable columns={columns} data={data} />}
        pageName1="주문번호별"
        pageName2="품목주문별"
      />
      <Divider />
      <CheckTable columns={columns} />
    </Orders_deliveryBlock>
  );
};

export default Orders_delivery;
