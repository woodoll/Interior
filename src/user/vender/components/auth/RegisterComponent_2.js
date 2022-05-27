/* #region  import */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Input,
  Divider,
  Button,
  Upload,
  Form,
  Select,
  TimePicker,
  Modal,
  message,
} from 'antd';

import ModalPostCode from 'lib/common/postCode/PostCode';
import { UploadOutlined } from '@ant-design/icons';

/* #endregion */

/* #region  styles */
const RegisterComponentBlock = styled.div`
  width: 30vw;
`;
const itemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
  autocomplete: 'off',
};
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 1rem;
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
  next,
  authResult,
  productTypeList,
  disGetProductType,
}) => {
  useEffect(() => {
    if (authResult.status === 201) {
      next();
    }
  });
  const { Search } = Input;

  const format = 'HH:mm';

  const characterChack = (e) => {
    console.log(e);
    const regExp = /[ \{\}\[\]\/?.,;:|\)~`\-_┼<>'\"\\\(\=]/gi;
    if (regExp.test(e.target.value)) {
      message.error('특수문자는 !,@,#,$,%,^,&,*이외에 사용하실 수 없습니다.');
    }
  };

  const onValueList = (changedValues, allValues) => {
    const value = Object.values(changedValues)[0];
    const key = Object.keys(changedValues);
    if (value._isAMomentObject) {
      const date = new Date(value._d);
      const time = date.toTimeString().substring(0, 8).replace(/\:/g, '');
      disChange(time, key);
      console.log(time);
    } else {
      disChange(value, key);
    }
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

  const idTip =
    '아이디는 소문자, 숫자 혼합 (각 최소 1개씩), 최소 6자에서 최대 16자입니다.';
  const passTip =
    '비밀번호는 대소문자, 숫자, 특수문자 !,@,#,$,%,^,&,* 혼합 (각 최소 1개씩), 최소 8자에서 최대 16자입니다.';
  const [zipCodeError, setZipCodeError] = useState('');
  const [zipAddrError, setAddrError] = useState('');

  const errorMessage = () => {
    if (zipCode === '') {
      setZipCodeError('error');
    }
    if (addr1 === '') {
      setAddrError('error');
    }
  };

  return (
    <RegisterComponentBlock>
      <Form
        name="Register"
        encType="multipart/form-data"
        labelAlign="left"
        onValuesChange={onValueList}
        onFinish={onFinish}
        requiredMark={false}
      >
        <Form.Item
          name="userId"
          label="아이디"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
          help={idTip}
        >
          <Input name="userId" value={userId} minlength="6" maxlength="16" />
        </Form.Item>
        <Form.Item
          name="password"
          label="비밀번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
          help={passTip}
        >
          <Input
            name="password"
            value={password}
            minlength="8"
            maxlength="16"
            onChange={characterChack}
          />
        </Form.Item>
        <Form.Item
          name="companyNm"
          label="회사명"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="companyNm" value={companyNm} />
        </Form.Item>
        <Form.Item
          name="productType"
          label="품목종류"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Select placeholder="품목종류">
            {productTypeList ? (
              <>
                {productTypeList.map((options) => (
                  <Select.Option value={options.code}>
                    {options.name}
                  </Select.Option>
                ))}
              </>
            ) : null}
          </Select>
        </Form.Item>
        <Form.Item
          name="ceoNm"
          label="대표자성함"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="ceoNm" value={ceoNm} />
        </Form.Item>
        <Form.Item
          name="businessNb"
          label="사업자번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="businessNb" value={businessNb} />
        </Form.Item>
        <Form.Item
          name="businessType"
          label="업태"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="businessType" value={businessType} />
        </Form.Item>
        <Form.Item
          name="businessItems"
          label="업종"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="businessItems" value={businessItems} />
        </Form.Item>
        <Form.Item
          name="mailOrderNb"
          label="회사번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="mailOrderNb" value={mailOrderNb} />
        </Form.Item>
        <Form.Item
          name="customerServiceNb"
          label="고객문의번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="customerServiceNb" value={customerServiceNb} />
        </Form.Item>
        <Form.Item
          name="avlbStartTime"
          label="상담시작시간"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <TimePicker format={format} />
        </Form.Item>
        <Form.Item
          name="avlbEndTime"
          label="상담종료시간"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <TimePicker format={format} />
        </Form.Item>
        <Form.Item
          name="zipCode"
          label="우편번호"
          {...itemLayout}
          rules={[{ message: '' }]}
        >
          <Search
            name="zipCode"
            enterButton="우편번호"
            onSearch={onSearch}
            readOnly
            value={zipCode}
            status={zipCodeError}
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
              setZipCodeError={setZipCodeError}
              setAddrError={setAddrError}
            />
          </Modal>
        </Form.Item>
        <Form.Item name="addr1" label="주소" {...itemLayout}>
          <Input name="addr1" readOnly value={addr1} status={zipAddrError} />
          <></> {/* <- 이게 있어야지 입력이 가능함 */}
        </Form.Item>
        <Form.Item
          name="addr2"
          label="상세주소"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="addr2" value={addr2} />
        </Form.Item>
        <Form.Item
          name="managerNm"
          label="담당자명"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="managerNm" value={managerNm} />
        </Form.Item>
        <Form.Item
          name="managerMobile"
          label="담당자번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="managerMobile" value={managerMobile} />
        </Form.Item>
        <Form.Item
          name="managerEmail"
          label="담당자이메일"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="managerEmail" value={managerEmail} />
        </Form.Item>
        <Form.Item
          name="bankNm"
          label="은행명"
          rules={[{ required: true, message: '' }]}
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
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="accountHolder" value={accountHolder} />
        </Form.Item>
        <Form.Item
          name="accountNb"
          label="계좌번호"
          rules={[{ required: true, message: '' }]}
          {...itemLayout}
        >
          <Input name="accountNb" value={accountNb} />
        </Form.Item>
        <Form.Item
          name="registration"
          label="사업자등록증"
          rules={[{ required: true, message: '사업자등록증을 등록해주세요.' }]}
          {...itemLayout}
          valuePropName="fileImage"
          getValueFromEvent={normFile}
        >
          <Upload
            name="registration"
            beforeUpload={() => {
              return false;
            }}
            accept=".jpg, .jpeg, .png, .pdf"
          >
            <Button icon={<UploadOutlined />}>사업자 등록증 등록</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="passbook"
          label="통장사본"
          rules={[{ required: true, message: '통장사본을 등록해주세요' }]}
          {...itemLayout}
          valuePropName="fileImage"
          getValueFromEvent={normFile}
        >
          <Upload
            name="passbook"
            beforeUpload={() => {
              return false;
            }}
            accept=".jpg, .jpeg, .png, .pdf"
          >
            <Button icon={<UploadOutlined />}>통장사본 등록</Button>
          </Upload>
        </Form.Item>
        {authResult.status === 400 ? (
          <ErrorMessage>필수 항목을 입력해주세요!</ErrorMessage>
        ) : // {authResult.error[0].message}
        null}
        <Button
          style={{ width: '100%' }}
          type={'primary'}
          size="large"
          htmlType="submit"
          onClick={errorMessage}
        >
          저장
        </Button>
        <Divider style={{ border: '#fff' }} />
      </Form>
    </RegisterComponentBlock>
  );
};

export default RegisterComponent_2;
