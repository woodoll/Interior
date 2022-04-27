/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import Checkbox_all from 'lib/common/Checkbox_all';

import {
  Space,
  Select,
  Input,
  DatePicker,
  Button,
  Divider,
  PageHeader,
} from 'antd';
import CheckTable from 'lib/common/table/Table_check';
/* #endregion */

/* #region  styles */
const Orders_returnBlock = styled(Responsive)``;

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

const plainOptions = [
  '자동취소',
  '고객취소',
  '판매자취소',
  '반품중',
  '반품회수완료',
  '교환접수',
  '교환중',
  '교환완료',
];
const defaultCheckedList = [
  '자동취소',
  '고객취소',
  '판매자취소',
  '반품중',
  '반품회수완료',
  '교환접수',
  '교환중',
  '교환완료',
];

const columns = [
  {
    title: '접수번호',
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
    title: '주문자명/연락처',
    dataIndex: '',
  },
  {
    title: '수취인',
    dataIndex: '연락처',
  },
  {
    title: '사유',
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

const { RangePicker } = DatePicker;

const Orders_return = ({ setPathUrl }) => {
  setPathUrl('취소/교환/반품');
  return (
    <Orders_returnBlock>
      <PageHeader className="PageHeader" title="취소/교환/반품" />
      <Divider />
      <Space direction="vertical" size={12}>
        <Checkbox_all
          plainOptions={plainOptions}
          defaultCheckedList={defaultCheckedList}
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
      <Divider />
      <CheckTable columns={columns} />
    </Orders_returnBlock>
  );
};

export default Orders_return;
