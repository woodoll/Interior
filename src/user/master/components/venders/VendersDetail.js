import React, { useState } from 'react';
import styled from 'styled-components';
import {
  PageHeader,
  Breadcrumb,
  Divider,
  Tag,
  Descriptions,
  Button,
  Select,
} from 'antd';
import Responsive from 'lib/styles/Responsive';
import { useNavigate } from 'react-router-dom';

const VendersdetailBlock = styled(Responsive)``;

const VendersDetail = ({
  modalData,
  approvalType,
  uuid,
  payload,
  disChange,
  disPutApprove,
}) => {
  // {
  // payload.message === '승인상태 변경 완료'
  // ? navigate('/master/venders/all_list')
  //     : null;
  // }
  // message.success('상태변경이 완료되었습니다.');
  const navigate = useNavigate();
  const data = modalData;
  const firstNum = JSON.stringify(data.managerMobile).substring(0, 4);
  const middleNum = JSON.stringify(data.managerMobile).substring(4, 8);
  const lastNum = JSON.stringify(data.managerMobile).substring(8);
  const sumNum = firstNum + '-' + middleNum + '-' + lastNum;
  const num = sumNum.replace(/\"/g, '');
  disChange(data.uuid, 'uuid');
  const onChange = (e) => {
    disChange(e, 'approvalType');
  };
  const onApprove = (e) => {
    disPutApprove({ uuid, approvalType });
  };
  return (
    <VendersdetailBlock>
      <PageHeader
        className="PageHeader"
        title="판매사 관리"
        extra={[
          <Breadcrumb style={{ margin: '16px 0 ' }}>
            <Breadcrumb.Item>홈</Breadcrumb.Item>
            <Breadcrumb.Item>판매사 관리</Breadcrumb.Item>
            <Breadcrumb.Item>판매사 상세 관리</Breadcrumb.Item>
          </Breadcrumb>,
        ]}
        onBack={() => navigate('/master/venders/all_list')}
      />
      <Divider />
      <Descriptions title={data.companyNm} bordered>
        <Descriptions.Item label="회사 이름">
          {data.companyNm}
        </Descriptions.Item>
        <Descriptions.Item label="계정 아이디">
          {data.managerNm}
        </Descriptions.Item>
        <Descriptions.Item label="담당자명">{data.managerNm}</Descriptions.Item>
        <Descriptions.Item label="담당자 번호">{num}</Descriptions.Item>
        <Descriptions.Item label="담당자 이메일">
          {data.managerEmail}
        </Descriptions.Item>
        <Descriptions.Item label="계정 생성일">
          {JSON.stringify(data.createDate).substring(1, 9)}
        </Descriptions.Item>
        <Descriptions.Item label="계정 상태">
          <Select
            style={{ width: '200px' }}
            defaultValue={JSON.stringify(data.approvalType).substring(1, 4)}
            onChange={onChange}
          >
            <Select.Option value="M01">승인대기</Select.Option>
            <Select.Option value="M02">승인완료</Select.Option>
          </Select>
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Button type="primary" onClick={onApprove}>
        수정
      </Button>
    </VendersdetailBlock>
  );
};

export default VendersDetail;
