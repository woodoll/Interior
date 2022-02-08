import React from 'react';
import Button from '../../../styles/Button';
import styled from 'styled-components';
import Responsive from '../../../styles/Responsive';

const approveBlock = styled(Responsive)``;

const approve = (venders, loading, error, onPublish) => {
  const vender = venders.venders;
  // const columnData = [
  //   {
  //     accessor: 'createDate',
  //     Header: '요청일',
  //   },
  //   {
  //     accessor: 'companyName',
  //     Header: '회사명',
  //   },
  //   {
  //     accessor: 'zipCode',
  //     Header: '구분',
  //   },
  //   {
  //     accessor: 'address1',
  //     Header: '주소',
  //   },
  //   {
  //     accessor: 'companyPhone1',
  //     Header: '전화번호',
  //   },
  //   {
  //     accessor: 'phone1',
  //     Header: '관리자 전화번호',
  //   },
  //   {
  //     accessor: 'mobile1',
  //     Header: '관리자 휴대번호',
  //   },
  //   {
  //     accessor: 'email',
  //     Header: '관리자 이메일',
  //   },
  //   {
  //     accessor: 'memo',
  //     Header: '메모',
  //   },
  //   {
  //     accessor: 'userId',
  //     Header: '설정(승인)',
  //     Cell: (Id) => (
  //       <Button
  //         small
  //         onClick={() => {
  //           console.log('onClick');
  //           // setApproveId(Id.row.values.userId);
  //           // console.log(Id.row.values.userId);
  //           // console.log(approveId);
  //           const userId = `${Id.row.values.userId}`;
  //           console.log(userId);
  //           setApproveId({
  //             id: userId,
  //           });
  //           onSubmit = { onSubmit };
  //         }}
  //       >
  //         승인
  //       </Button>
  //     ),
  //   },
  // ];

  if (error) {
    return <approveBlock>에러가 발생했습니다.</approveBlock>;
  }
  return (
    <approveBlock>
      <table>
        <th>
          <td>요청일</td>
          <td>회사명</td>
          <td>구분</td>
          <td>주소</td>
          <td>전화번호</td>
          <td>관리자 번호</td>
          <td>관리자 휴대번호</td>
          <td>관리자 메일</td>
          <td>메모</td>
          <td>승인</td>
        </th>

        {vender.map((vender) => {
          // const onApprove = () => {
          //   setApproveId({
          //     id: vender.userId,
          //   });
          // };
          return (
            <tr>
              <td>{vender.createDate}</td>
              <td>{vender.companyName}</td>
              <td>{vender.zipCode}</td>
              <td>
                {vender.address1}
                {vender.address2}
              </td>
              <td>
                {vender.companyPhone1}
                {vender.companyPhone2}
                {vender.companyPhone3}
              </td>
              <td>
                {vender.phone1}
                {vender.phone2}
                {vender.phone3}
              </td>
              <td>
                {vender.mobile1}
                {vender.mobile2}
                {vender.mobile3}
              </td>
              <td>{vender.email}</td>
              <td>{vender.memo}</td>
              <td>
                <Button small onClick={onPublish}>
                  승인
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </approveBlock>
  );
};

export default approve;
