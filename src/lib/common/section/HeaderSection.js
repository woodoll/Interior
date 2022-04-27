/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

import palette from 'lib/styles/palette';
/* #endregion */

/* #region  styles */
const HeaderSectionBlock = styled.div``;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: ${palette.gray[9]};
  }
  .right {
    display: flex;
    margin-right: 1rem;
    align-items: center;
  }
`;

const UserInfo = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
  margin-right: 1rem;
  vertical-align: middle;
`;
/* #endregion */

const HeaderSection = ({ pagename, pageuser, user, disLogout }) => {
  return (
    <HeaderSectionBlock>
      <Wrapper>
        <div>
          <Link to={`/${pageuser}`} className="logo">
            {pagename}
          </Link>
        </div>
        {user ? (
          <div className="right">
            <UserInfo>{user.name} 님 환영합니다.</UserInfo>
            {/* <StyledButton to="/">쇼핑몰 바로가기</StyledButton>
            <StyledButton to="/">관리자 정보</StyledButton> */}
            <Button onClick={disLogout}>로그아웃</Button>
          </div>
        ) : (
          <div className="right">
            <Button styles={{ margin: '0 auto' }} type="primary">
              <Link to={`/${pageuser}/auth/login`}>로그인</Link>
            </Button>
          </div>
        )}
      </Wrapper>
    </HeaderSectionBlock>
  );
};

export default HeaderSection;
