/* #region  import */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import {
  Input,
  Divider,
  Button,
  Upload,
  Form,
  Select,
  TimePicker,
  Modal,
} from 'antd';

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

const itemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 0,
  },
};
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
  authResult,
}) => {
  useEffect(() => {
    if (authResult.status === 201) {
      next();
    }
  });
  const { Search } = Input;

  const [registrationImage, setRegistrationImage] = useState('');

  const onUpload = (e) => {
    console.log(e);
    disUpload(e.target.files[0], e.target.name);
  };

  const saveRegistrationImage = (e) => {
    setRegistrationImage(URL.createObjectURL(e.file));
    console.log(registrationImage);
  };

  const onValueList = (changedValues, allValues) => {
    const value = Object.values(changedValues)[0];
    const key = Object.keys(changedValues);
    disChange(value, key);
  };
  const onSearch = (value) => {
    disChange('', 'addr1');
    disChange('', 'zipCode');
    showModal();
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    const fileImage = e.fileList[0].originFileObj;
    return fileImage;
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmit = (e) => {
    const reader = new FileReader();
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
    formData.append('registration', registration, `${registration.name}`);
    formData.append('passbook', passbook, `${passbook.name}`);

    disSubmit({
      formData,
    });

    for (var pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
  };

  const onFinish = (values) => {
    console.log('값은-------------------------------');
    console.log(values);
    onSubmit();
  };

  return (
    <RegisterComponentBlock>
      <Form
        name="Register"
        encType="multipart/form-data"
        labelAlign="left"
        onValuesChange={onValueList}
        onFinish={onFinish}
      >
        <Form.Item
          name="userId"
          label="아이디"
          rules={[{ required: true, message: '아이디를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="userId" value={userId} />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="password" value={password} />
        </Form.Item>
        <Form.Item
          name="companyNm"
          label="회사명"
          rules={[{ required: true, message: '회사명을 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="companyNm" value={companyNm} />
        </Form.Item>
        <Form.Item
          name="productType"
          label="품목종류"
          rules={[{ required: true, message: '품목종류를 선택해주세요' }]}
          {...itemLayout}
        >
          <Select placeholder="품목종류">
            <Select.Option value="00">페인트</Select.Option>
            <Select.Option value="01">벽지</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="ceoNm"
          label="대표자성함"
          rules={[{ required: true, message: '대표자성함을 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="ceoNm" value={ceoNm} />
        </Form.Item>
        <Form.Item
          name="businessNb"
          label="사업자번호"
          rules={[{ required: true, message: '사업자번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="businessNb" value={businessNb} />
        </Form.Item>
        <Form.Item
          name="businessType"
          label="업태"
          rules={[{ required: true, message: '업태를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="businessType" value={businessType} />
        </Form.Item>
        <Form.Item
          name="businessItems"
          label="업종"
          rules={[{ required: true, message: '업종을 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="businessItems" value={businessItems} />
        </Form.Item>
        <Form.Item
          name="mailOrderNb"
          label="회사번호"
          rules={[{ required: true, message: '회사번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="mailOrderNb" value={mailOrderNb} />
        </Form.Item>
        <Form.Item
          name="customerServiceNb"
          label="고객문의번호"
          rules={[{ required: true, message: '고객문의번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="customerServiceNb" value={customerServiceNb} />
        </Form.Item>
        <Form.Item
          name="avlbStartTime"
          label="상담시작시간"
          rules={[{ required: true, message: '상담시작시간를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="avlbStartTime" value={avlbStartTime} />
        </Form.Item>
        <Form.Item
          name="avlbEndTime"
          label="상담종료시간"
          rules={[{ required: true, message: '상담종료시간를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="avlbEndTime" value={avlbEndTime} />
        </Form.Item>
        <Form.Item name="zipCode" label="우편번호" {...itemLayout}>
          <Search
            name="zipCode"
            enterButton="우편번호"
            onSearch={onSearch}
            readOnly
            value={zipCode}
          />
          <Modal
            title="우편번호 검색"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={
              <Button key="back" onClick={handleCancel}>
                닫기
              </Button>
            }
          >
            <ModalPostCode
              setIsModalVisible={setIsModalVisible}
              disChange={disChange}
            />
          </Modal>
        </Form.Item>
        <Form.Item name="addr1" label="우편번호" {...itemLayout}>
          <Input name="addr1" readOnly value={addr1} />
          <></>
        </Form.Item>
        <Form.Item
          name="addr2"
          label="상세주소"
          rules={[{ required: true, message: '상세주소를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="addr2" value={addr2} />
        </Form.Item>
        <Form.Item
          name="managerNm"
          label="담당자명"
          rules={[{ required: true, message: '담당자성함을 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="managerNm" value={managerNm} />
        </Form.Item>
        <Form.Item
          name="managerMobile"
          label="담당자번호"
          rules={[{ required: true, message: '담당자번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="managerMobile" value={managerMobile} />
        </Form.Item>
        <Form.Item
          name="managerEmail"
          label="담당자이메일"
          rules={[{ required: true, message: '담당자이메일을 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="managerEmail" value={managerEmail} />
        </Form.Item>
        <Form.Item
          name="bankNm"
          label="은행명"
          rules={[{ required: true, message: '거래은행을 선택해주세요' }]}
          {...itemLayout}
        >
          <Select placeholder="은행명을 선택해주세요">
            <Select.Option value="B001">KEB하나은행</Select.Option>
            <Select.Option value="B002">SC제일은행</Select.Option>
            <Select.Option value="B003">국민은행</Select.Option>
            <Select.Option value="B004">신한은행</Select.Option>
            <Select.Option value="B005">외환은행</Select.Option>
            <Select.Option value="B006">우리은행</Select.Option>
            <Select.Option value="B007">기업은행</Select.Option>
            <Select.Option value="B008">농협은행</Select.Option>
            <Select.Option value="B009">수협은행</Select.Option>
            <Select.Option value="B000">한국산업은행</Select.Option>
            <Select.Option value="B011">한국수출입은행</Select.Option>
            <Select.Option value="B012">한국시티은행</Select.Option>
            <Select.Option value="B013">경남은행</Select.Option>
            <Select.Option value="B014">광주은행</Select.Option>
            <Select.Option value="B015">대구은행</Select.Option>
            <Select.Option value="B016">부산은행</Select.Option>
            <Select.Option value="B017">전북은행</Select.Option>
            <Select.Option value="B018">제주은행</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="accountHolder"
          label="예금주"
          rules={[{ required: true, message: '예금주를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="accountHolder" value={accountHolder} />
        </Form.Item>
        <Form.Item
          name="accountNb"
          label="계좌번호"
          rules={[{ required: true, message: '계좌번호를 입력해주세요' }]}
          {...itemLayout}
        >
          <Input name="accountNb" value={accountNb} />
        </Form.Item>
        <Form.Item
          name="registration"
          label="사업자등록증"
          // rules={[{ required: true, message: '사업자등록증을 등록해주세요' }]}
          {...itemLayout}
          valuePropName="fileImage"
          getValueFromEvent={normFile}
        >
          <Upload
            name="registration"
            beforeUpload={() => {
              return false;
            }}
            onChange={saveRegistrationImage}
          >
            <Button icon={<UploadOutlined />}>사업자 등록증 등록</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="passbook"
          label="통장사본"
          // rules={[{ required: true, message: '통장사본을 등록해주세요' }]}
          {...itemLayout}
          valuePropName="fileImage"
          getValueFromEvent={normFile}
        >
          <Upload
            name="passbook"
            beforeUpload={() => {
              return false;
            }}
          >
            <Button icon={<UploadOutlined />}>통장사본 등록</Button>
          </Upload>
        </Form.Item>
        {/* <input type="file" name="registration" onChange={onUpload} />
        <input type="file" name="passbook" onChange={onUpload} /> */}
        <Button
          style={{ width: '100%' }}
          type={'primary'}
          size="large"
          htmlType="submit"
        >
          저장
        </Button>
        <Divider style={{ border: '#fff' }} />
      </Form>
    </RegisterComponentBlock>
  );
};

export default RegisterComponent_2;
