/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Button from 'lib/styles/Button';
/* #endregion */

/* #region  styles */
const HeaderSectionBlock = styled.div`
  padding: 0 3rem;
  width: 100%;
  height: 10vh;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: ${palette.gray[9]};
  }
  .right {
    display: flex;
    margin-right: 1rem;
  }
`;

const UserInfo = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  margin-right: 1rem;
  vertical-align: middle;
`;

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.5rem;
  }
`;
/* #endregion */

const HeaderSection = ({ pagename, pageuser, user, disLogout }) => {
  return (
    <HeaderSectionBlock>
      <Wrapper>
        <Link to={`/${pageuser}`} className="logo">
          {pagename}
        </Link>
        {user ? (
          <div className="right">
            <UserInfo>{user.name} 님 환영합니다.</UserInfo>
            {/* <StyledButton to="/">쇼핑몰 바로가기</StyledButton>
            <StyledButton to="/">관리자 정보</StyledButton> */}
            <StyledButton onClick={disLogout}>로그아웃</StyledButton>
          </div>
        ) : (
          <div className="right">
            <Button to={`/${pageuser}/signIn`}>로그인</Button>
          </div>
        )}
      </Wrapper>
    </HeaderSectionBlock>
  );
};

export default HeaderSection;
