/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Input, Select, Button, Divider, DatePicker, Space } from 'antd';
import Checkbox_all from 'lib/common/Checkbox_all';
import CheckTable from 'lib/common/Table_check';
/* #endregion */

/* #region  styles */
const Board_goodsreviewBlock = styled(Responsive)``;

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

const plainOptions = ['텍스트리뷰', '포토리뷰'];
const defaultCheckedList = ['텍스트리뷰', '포토리뷰'];

const RePlainOptions = ['1점', '2점', '3점', '4점', '5점'];
const ReDefaultCheckedList = ['1점', '2점', '3점', '4점', '5점'];

const columns = [
  {
    title: '평점',
    dataIndex: 'gpa',
  },
  {
    title: '상품명',
    dataIndex: 'name',
  },
  {
    title: '구매자',
    dataIndex: 'buyer',
  },
  {
    title: '이미지',
    dataIndex: 'reviewImg',
  },
  {
    title: '상품평',
    dataIndex: 'review',
  },
  {
    title: '후기작성일',
    dataIndex: 'date',
  },
  {
    title: '상세보기',
    dataIndex: 'detailBTN',
  },
];

const Board_goodsreview = () => {
  return (
    <Board_goodsreviewBlock>
      <h2>상품 리뷰</h2>
      <Divider />
      <Form>
        <Space direction="vertical" size={12}>
          <AddSection>
            <p>리뷰타입</p>
            <Checkbox_all
              plainOptions={plainOptions}
              defaultCheckedList={defaultCheckedList}
            />
          </AddSection>
          <AddSection>
            <p>구매자평점</p>
            <Checkbox_all
              plainOptions={RePlainOptions}
              defaultCheckedList={ReDefaultCheckedList}
            />
          </AddSection>
          <AddSection>
            <p>상세 조건</p>
            <Select />
            <Input />
          </AddSection>
          <AddSection>
            <p>후기작성일</p>
            <RangePicker />
          </AddSection>
          <div>
            <Button type="primary">검색</Button>
            <Button>초기화</Button>
          </div>
        </Space>
      </Form>
      <Divider />
      <CheckTable columns={columns} />
    </Board_goodsreviewBlock>
  );
};

export default Board_goodsreview;
