/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';
import { useNavigate, Link } from 'react-router-dom';

import { Input, Button, Checkbox, Space, PageHeader } from 'antd';
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
  align-items: center;
`;

// const ErrorMessage = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 0.875rem;
//   margin-top: 1rem;
// `;
/* #endregion */

const VenderLoginComponent = ({ userId, password, disLogin, disChange }) => {
  const navigate = useNavigate();
  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onSubmit = (e) => {
    e.preventDefault();
    disLogin({ userId, password });
    disChange((e.target.value = ''));
  };
  return (
    <LoginComponentBlock>
      <form onSubmit={onSubmit}>
        <Space direction="vertical" size={12}>
          <PageHeader
            className="PageHeader"
            title="인테리어 플레이"
            subTitle="판매사 관리자"
            onBack={() => window.history.back()}
          />

          <Input
            autoComplete="userId"
            name="userId"
            placeholder="아이디"
            onChange={onChange}
            value={userId}
          />
          <Input
            autoComplete="new-password"
            name="password"
            placeholder="비밀번호"
            type="password"
            onChange={onChange}
            value={password}
          />
          <Split>
            <div>
              <Checkbox style={{ margin: '0 0.5rem' }}>아이디 저장</Checkbox>
            </div>
            <Link to="/">아이디/비밀번호 찾기</Link>
          </Split>
          <Button
            style={{ width: '100%' }}
            size="large"
            type="primary"
            onClick={onSubmit}
          >
            로그인
          </Button>
          <h4>판매자가 아니신가요?</h4>
          <Button style={{ width: '100%' }} size="large" onClick={onSubmit}>
            <Link to="/vender/auth/register">회원가입</Link>
          </Button>
        </Space>
      </form>
    </LoginComponentBlock>
  );
};

export default VenderLoginComponent;
