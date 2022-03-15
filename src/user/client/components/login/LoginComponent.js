import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import palette from 'lib/styles/palette';
import Button from 'lib/styles/Button';

const LoginComponentBlock = styled.div`
  height: 100%;
  background: #fff;
  padding: 15vw;
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

const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
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

const ClientLoginComponent = ({
  userId,
  password,
  payload,
  disLogin,
  disChange,
}) => {
  const navigate = useNavigate();
  const onChange = (e) => disChange(e.target.value, e.target.name);
  const onSubmit = (e) => {
    e.preventDefault();
    disLogin({ userId, password });
    disChange((e.target.value = ''));
  };
  useEffect(() => {
    if (payload) {
      navigate('/');
    }
  });
  return (
    <LoginComponentBlock>
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
    </LoginComponentBlock>
  );
};

export default ClientLoginComponent;
