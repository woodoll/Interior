/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Button from 'lib/styles/Button';
/* #endregion */

/* #region  styles */
const LoginComponentBlock = styled.div`
  height: 100%;
  width: 100vw;
  background: #fff;
  padding: 15vh 35vw;
  h3 {
    margin-top: 1rem;
    color: ${palette.gray[8]};
  }
  input {
    margin-top: 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.teal[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Split = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const ButtonWithMarginTop = styled(Button)`
  margin: 0;
  background: ${palette.gray[7]};
  &:hover {
    background: ${palette.gray[9]};
  }
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
      <h3>인테리어 플레이</h3>
      <h1>판매사 관리자</h1>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="userId"
          name="userId"
          placeholder="아이디"
          onChange={onChange}
          value={userId}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={password}
        />
        <Split>
          <div>
            <label id="a">
              <input type="checkbox" style={{ margin: '0 0.5rem' }} />
            </label>
            <label for="a">아이디 저장</label>
          </div>
          <Link to="/">아이디/비밀번호 찾기</Link>
        </Split>
        <ButtonWithMarginTop
          cyan
          fullWidth
          style={{ background: `${palette.blue[7]}` }}
        >
          로그인
        </ButtonWithMarginTop>
        <h3>판매자가 아니신가요?</h3>
        <ButtonWithMarginTop
          cyan
          fullWidth
          style={{
            border: `3px solid ${palette.blue[7]}`,
            boxSizing: 'border-box',
            background: 'none',
            color: `${palette.blue[7]}`,
          }}
        >
          <Link to="/">회원가입</Link>
        </ButtonWithMarginTop>
      </form>
    </LoginComponentBlock>
  );
};

export default VenderLoginComponent;
