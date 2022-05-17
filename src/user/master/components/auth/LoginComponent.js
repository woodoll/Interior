/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button, Checkbox, Space, PageHeader, Form } from 'antd';
/* #endregion */

/* #region  styles */
const LoginComponentBlock = styled(Responsive)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Split = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

/* #endregion */

const MasterLoginComponent = ({
  userId,
  password,
  disLogin,
  disChange,
  auth,
}) => {
  const navigate = useNavigate();
  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onSubmit = (e) => {
    disLogin({ userId, password });
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LoginComponentBlock>
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <PageHeader
          className="PageHeader"
          title="인테리어 플레이"
          subTitle="마스터 관리자"
          style={{ marginBottom: 12 }}
        />
        <Form.Item
          name="userId"
          rules={[{ required: true, message: '아이디를 입력해주세요' }]}
        >
          <Input
            autoComplete="userId"
            name="userId"
            placeholder="아이디"
            onChange={onChange}
            value={userId}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: '비밀번호를 입력해주세요' }]}
        >
          <Input.Password
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={password}
          />
        </Form.Item>
        {auth.status === 401 ? (
          <ErrorMessage>{auth.message}입니다.</ErrorMessage>
        ) : null}
        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <Split>
            <Checkbox
              style={{ margin: '0 0.5rem' }}
              name="remember"
              valuePropName="checked"
            >
              아이디 저장
            </Checkbox>
          </Split>
          <Button
            style={{ width: '100%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            로그인
          </Button>
        </Space>
      </Form>
    </LoginComponentBlock>
  );
};

export default MasterLoginComponent;
