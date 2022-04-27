/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import {
  Input,
  Select,
  Button,
  Divider,
  DatePicker,
  Space,
  PageHeader,
} from 'antd';
import Checkbox_all from 'lib/common/Checkbox_all';
import Table_tag from 'lib/common/table/Table_tag';
/* #endregion */

/* #region  styles */
const Board_goodsqnaBlock = styled(Responsive)``;

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

const routes = [
  {
    path: '',
    breadcrumbName: '게시판 관리',
  },
  {
    path: '',
    breadcrumbName: '상품 문의',
  },
];

const { RangePicker } = DatePicker;

const plainOptions = ['답변대기', '답변완료'];
const defaultCheckedList = ['답변대기', '답변완료'];

const Board_goodsqna = ({ setPathUrl }) => {
  setPathUrl('상품 문의');
  return (
    <Board_goodsqnaBlock>
      <PageHeader className="PageHeader" title="상품 문의" />
      <Divider />
      <Form>
        <Space direction="vertical" size={12}>
          <AddSection>
            <p>상세조건</p>
            <Select />
            <Input />
          </AddSection>
          <AddSection>
            <p>답변상태</p>
            <Checkbox_all
              plainOptions={plainOptions}
              defaultCheckedList={defaultCheckedList}
            />
          </AddSection>
          <AddSection>
            <p>상품문의일</p>
            <RangePicker />
          </AddSection>
          <div>
            <Button>검색</Button>
            <Button>초기화</Button>
          </div>
        </Space>
      </Form>
      <Divider />
      <Table_tag />
    </Board_goodsqnaBlock>
  );
};

export default Board_goodsqna;
