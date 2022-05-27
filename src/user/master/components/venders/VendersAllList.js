/* #region  import */
import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { Table, Tag, PageHeader, Breadcrumb, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';
/* #endregion */

/* #region  styles */
const ApproveBlock = styled(Responsive)``;
const tableStyle = {
  msUserSelect: 'none',
  mozUserSelect: '-moz-none',
  webkitUserSelect: 'none',
  khtmlUserSelect: 'none',
  curser: 'poinster',
};
/* #endregion */

const MasterVenderAllListComponent = ({
  venders,
  disPutApprove,
  setModalData,
}) => {
  // const [color, setColor] = useState('');
  // const [approveMsg, setApproveMsg] = useState('');
  const navigate = useNavigate();
  const columns = [
    {
      title: '판매사 상호',
      dataIndex: 'companyNm',
      key: 'companyNm',
    },
    {
      title: '판매사 아이디',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: '당담자 이름',
      dataIndex: 'managerNm',
      key: 'managerNm',
    },
    {
      title: '담당자 번호',
      dataIndex: 'managerMobile',
      key: 'managerMobile',
      render: (managerMobile) => {
        const firstNum = JSON.stringify(managerMobile).substring(0, 4);
        const middleNum = JSON.stringify(managerMobile).substring(4, 8);
        const lastNum = JSON.stringify(managerMobile).substring(8);
        const sumNum = firstNum + '-' + middleNum + '-' + lastNum;
        return sumNum.replace(/\"/g, '');
      },
    },
    {
      title: '담당자 메일',
      dataIndex: 'managerEmail',
      key: 'managerEmail',
    },
    {
      title: '신청일시',
      dataIndex: 'createDate',
      key: 'createDate',
      render: (createDate) => {
        const date = JSON.stringify(createDate).substring(1, 9);
        return date;
      },
    },
    {
      title: '승인여부',
      dataIndex: 'approvalType',
      key: 'approvalType',
      render: (approvalType) => {
        let color = '';
        let approveMsg = '';
        if (approvalType === 'M01') {
          color = 'cyan';
          approveMsg = '승인요청';
        } else if (approvalType === 'M02') {
          color = 'geekblue';
          approveMsg = '승인완료';
        } else if (approvalType === 'M03') {
          color = 'volcano';
          approveMsg = '승인중지';
        } else if (approvalType === 'M04') {
          color = 'lime';
          approveMsg = '휴면';
        } else if (approvalType === 'M05') {
          color = 'blue';
          approveMsg = '탈퇴';
        } else {
          color = 'volcano';
          approveMsg = '잘못된 형식';
        }

        return (
          <Tag color={color} key={approvalType}>
            {approveMsg}
          </Tag>
        );
      },
    },
  ];

  const data = venders;
  return (
    <ApproveBlock>
      {venders ? (
        <>
          <PageHeader
            className="PageHeader"
            title="판매사 관리"
            extra={[
              <Breadcrumb style={{ margin: '16px 0 ' }}>
                <Breadcrumb.Item>홈</Breadcrumb.Item>
                <Breadcrumb.Item>판매사 관리</Breadcrumb.Item>
              </Breadcrumb>,
            ]}
          />
          <Divider />
          <Table
            columns={columns}
            dataSource={data}
            rowKey={(recode) => recode.uuid}
            style={tableStyle}
            onRow={(record, rowIndex) => {
              return {
                onClick: (e) => {
                  setModalData(record);
                  navigate('/master/venders/all_list/detail');
                },
                // onMouseEnter: (e) => {
                //   console.log(e.nativeEvent.fromElement.style);
                //   e.nativeEvent.fromElement.style.cursor = 'pointer';
                // },
              };
            }}
          />
        </>
      ) : (
        <>
          <Table />
          <p>안녕</p>
        </>
      )}
    </ApproveBlock>
  );
};

export default MasterVenderAllListComponent;
