/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Descriptions, Divider, Button, PageHeader } from 'antd';
import CheckTable from 'lib/common/table/Table_check';
/* #endregion */

/* #region  styles */
const Orders_return_detailBlock = styled(Responsive)``;
/* #endregion */

const Orders_return_detail = ({ setPathUrl }) => {
  setPathUrl('취소/반품/교환 내역');
  return (
    <Orders_return_detailBlock>
      <PageHeader className="PageHeader" title="취소/반품/교환 내역" />
      <Divider />
      <Descriptions title="접수정보">
        <Descriptions.Item label="접수번호">접수번호</Descriptions.Item>
        <Descriptions.Item label="접수일시">YYMMDD</Descriptions.Item>
        <br />
        <Descriptions.Item label="주문상태">주문상태</Descriptions.Item>
        <Descriptions.Item label="사유">접수사유</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title="관련주문정보">
        <Descriptions.Item label="주문번호">주문번호</Descriptions.Item>
        <Descriptions.Item label="주문일시">YYMMDD</Descriptions.Item>
        <br />
        <Descriptions.Item label="주문자명">주문자명</Descriptions.Item>
        <Descriptions.Item label="연락처">주문자 연락처</Descriptions.Item>
      </Descriptions>
      <Divider />
      <CheckTable />
      <Button>목록</Button>
    </Orders_return_detailBlock>
  );
};

export default Orders_return_detail;
