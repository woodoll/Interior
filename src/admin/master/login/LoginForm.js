import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../styles/palette';
import Button from '../../../styles/Button';
import { KAKAO_AUTH_URL } from '../../../api/kakao/OAuth';

const LoginFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
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
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const KaKaoBtn = styled(Button)``;

// const ErrorMessage = styled.div`
//   color: red;
//   text-align: center;
//   font-size: 0.875rem;
//   margin-top: 1rem;
// `;

const LoginForm = ({ userId, password, onChange, onSubmit }) => {
  return (
    <LoginFormBlock>
      <h3>로그인</h3>
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
        <ButtonWithMarginTop cyan fullWidth style={{ marginTop: '1rem' }}>
          로그인
        </ButtonWithMarginTop>
      </form>
      <KaKaoBtn yellow href={KAKAO_AUTH_URL}>
        카카오 로그인
      </KaKaoBtn>
      <Footer>
        <Link to="/register">회원가입</Link>
      </Footer>
    </LoginFormBlock>
  );
};

export default LoginForm;
