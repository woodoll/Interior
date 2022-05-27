/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import palette from 'lib/styles/palette';
/* #endregion */

/* #region  styles */
const HeaderSectionBlock = styled.div`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

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
    margin-right: 1rem;
  }
`;

const UserInfo = styled.div`
  font-size: 1.125rem;
  font-weight: 800;
`;
/* #endregion */

const HeaderSection = ({ pagename, user, disLogout, FontColor }) => {
  const navigate = useNavigate();

  return (
    <HeaderSectionBlock>
      <Wrapper>
        <div>
          <Link to={`/inspection`} className="logo" style={FontColor}>
            {pagename}
          </Link>
        </div>
        {user ? (
          <div className="right">
            <Space align="center">
              <UserInfo>
                {JSON.parse(user).companyNm || JSON.parse(user).data.masterNm}님
                환영합니다.
              </UserInfo>
              <Button to="/">쇼핑몰 바로가기</Button>
              <Button to="/">관리자 정보</Button>
              <Button
                onClick={() => {
                  disLogout();
                  navigate('/inspection');
                }}
              >
                로그아웃
              </Button>
            </Space>
          </div>
        ) : null}
      </Wrapper>
    </HeaderSectionBlock>
  );
};

export default HeaderSection;
