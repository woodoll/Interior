/* #region  import */
import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { Input, Divider, Space, Button, Upload, Form } from 'antd';

import ModalPostCode from 'lib/common/postCode/PostCode';
import { UploadOutlined } from '@ant-design/icons';
/* #endregion */

/* #region  styles */
const RegisterComponentBlock = styled(Responsive)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    width: 100px;
    align-self: flex-start;
  }

  Input {
    width: 200px;
  }
`;
/* #endregion */

const RegisterComponent_2 = ({
  userId,
  password,
  companyNm,
  productType,
  ceoNm,
  businessNb,
  businessType,
  businessItems,
  mailOrderNb,
  customerServiceNb,
  avlbStartTime,
  avlbEndTime,
  zipCode,
  addr1,
  addr2,
  managerNm,
  managerMobile,
  managerEmail,
  bankNm,
  accountHolder,
  accountNb,
  registration,
  passbook,
  disSubmit,
  disChange,
  disUpload,
  next,
}) => {
  const [zipcodeNum, setZipcodeNum] = useState('');
  const [address, setAddress] = useState('');
  zipCode = zipcodeNum;
  addr1 = address;

  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onUpload = (e, name) => {
    disUpload(e.file.originFileObj, name);
    console.log(e);
  };

  const onSubmit = (e) => {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('password', password);
    formData.append('companyNm', companyNm);
    formData.append('productType', productType);
    formData.append('ceoNm', ceoNm);
    formData.append('businessNb', businessNb);
    formData.append('businessType', businessType);
    formData.append('businessItems', businessItems);
    formData.append('mailOrderNb', mailOrderNb);
    formData.append('customerServiceNb', customerServiceNb);
    formData.append('avlbStartTime', avlbStartTime);
    formData.append('avlbEndTime', avlbEndTime);
    formData.append('zipCode', zipCode);
    formData.append('addr1', addr1);
    formData.append('addr2', addr2);
    formData.append('managerNm', managerNm);
    formData.append('managerMobile', managerMobile);
    formData.append('managerEmail', managerEmail);
    formData.append('bankNm', bankNm);
    formData.append('accountHolder', accountHolder);
    formData.append('accountNb', accountNb);
    formData.append('registration', registration);
    formData.append('passbook', passbook);

    disSubmit({
      formData,
    });

    next();
  };

  return (
    <RegisterComponentBlock>
      <form>
        <Space direction="vertical" size={12}>
          <AddSection>
            <p>아이디</p>
            <Input name="userId" value={userId} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>패스워드</p>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>회사명</p>
            <Input name="companyNm" value={companyNm} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>품목종류</p>
            <Input name="productType" value={productType} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>대표자성함</p>
            <Input name="ceoNm" value={ceoNm} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>사업자번호</p>
            <Input name="businessNb" value={businessNb} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>업태</p>
            <Input
              name="businessType"
              value={businessType}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>업종</p>
            <Input
              name="businessItems"
              value={businessItems}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>회사번호</p>
            <Input name="mailOrderNb" value={mailOrderNb} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>회사번호</p>
            <Input
              name="customerServiceNb"
              value={customerServiceNb}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>시작시간</p>
            <Input
              name="avlbStartTime"
              value={avlbStartTime}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>종료시간</p>
            <Input name="avlbEndTime" value={avlbEndTime} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>우편번호</p>
            <Input
              style={{ width: '100px', marginRight: '10px' }}
              name="zipCode"
              value={zipCode}
              onChange={onChange}
            />
            <ModalPostCode setAddress={setAddress} setZipcode={setZipcodeNum} />
          </AddSection>
          <AddSection>
            <p>상세주소</p>
            <Input name="add1" value={addr1} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>상세주소</p>
            <Input name="addr2" value={addr2} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>담당자명</p>
            <Input name="managerNm" value={managerNm} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>담당자전화번호</p>
            <Input
              name="managerMobile"
              value={managerMobile}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>담당자이메일</p>
            <Input
              name="managerEmail"
              value={managerEmail}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>은행명</p>
            <Input name="bankNm" value={bankNm} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>예금주</p>
            <Input
              name="accountHolder"
              value={accountHolder}
              onChange={onChange}
            />
          </AddSection>
          <AddSection>
            <p>계좌번호</p>
            <Input name="accountNb" value={accountNb} onChange={onChange} />
          </AddSection>
          <AddSection>
            <p>사업자등록증</p>
            <Upload
              name="registration"
              onChange={(e) => onUpload(e, 'registration')}
            >
              {/* registration = info.file */}
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            {/* <Input type="file" name="registration" onChange={onUpload} /> */}
          </AddSection>
          <AddSection>
            <p>뭔가의이미지</p>
            <Upload name="passbook" onChange={(e) => onUpload(e, 'passbook')}>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            {/* <Input type="file" name="passbook" onChange={onUpload} /> */}
          </AddSection>
          <Button
            onClick={() => onSubmit()}
            style={{ width: '100%' }}
            type={'primary'}
            size="large"
          >
            저장
          </Button>
        </Space>
      </form>
    </RegisterComponentBlock>
  );
};

export default RegisterComponent_2;
