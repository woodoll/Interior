import React from 'react';
import styled from 'styled-components';
import Button from '../../../styles/Button';
import Responsive from '../../../styles/Responsive';

const ApproveBlock = styled(Responsive)``;

const AllList = ({ venders, disPutApprove }) => {
  console.log(venders);
  return (
    <ApproveBlock>
      {venders && (
        <table>
          <thead>
            <tr>
              <th>요청일</th>
              <th>회사명</th>
              <th>구분</th>
              <th>주소</th>
              <th>전화번호</th>
              <th>관리자 번호</th>
              <th>관리자 휴대번호</th>
              <th>관리자 메일</th>
              <th>메모</th>
              <th>승인</th>
            </tr>
          </thead>
          <tbody>
            {venders.map((vender) => {
              return (
                <tr key={vender.uuid}>
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
                    <Button
                      small
                      key={vender.uuid}
                      onClick={() => disPutApprove(vender.userId)}
                    >
                      승인
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </ApproveBlock>
  );
};

export default AllList;
