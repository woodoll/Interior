import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../../styles/palette';
import Button from '../../../styles/Button';

// 로그인 폼을 보여준다.
const LoginFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

// 스타일링 input
const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    color: ${palette.blue[7]};
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;

// 폼 하단에 로그인 혹은 회원가입 링크를 보여 줌.
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

// 에러를 보여줌.
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const ButtonWidthMarginTop = styled(Button)`
  margin-top: 1rem;
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <h3>로그인</h3>
      <form>
        <StyledInput autoComplete="userId" name="userId" placeholder="아이디" />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        <ButtonWidthMarginTop blue fullWidth>
          로그인
        </ButtonWidthMarginTop>
      </form>
      <Footer>
        <Link>회원가입</Link>
      </Footer>
    </LoginFormBlock>
  );
};

export default LoginForm;
