/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import HeaderSection from 'lib/common/section/HeaderSection';
import SidebarSection from 'lib/common/section/SidebarSection';
import MainSection from 'lib/common/section/MainSection';
import { MasterMenuList } from 'lib/master/masterMenuList';

import MasterLoginContainer from 'user/master/containers/login/LoginContainer';
import AllListContainer from 'user/master/containers/venders/AllListContainer';
/* #endregion */

/* #region  styles */
const MasterMainSectionBlock = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Sections = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;

  overflow-y: scroll;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionForm = styled(Responsive)`
  padding: 1rem;
  background: ${palette.gray[2]};
`;
/* #endregion */

const MasterMainSection = () => {
  return (
    <MasterMainSectionBlock>
      <HeaderSection pagename="INTERIOR PLAY MSTER" pageuser="master" />
      <Sections>
        <SidebarSection MenuList={MasterMenuList} pageuser="master" />
        <SectionForm>
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route path="/signIn" element={<MasterLoginContainer />} />
              <Route path="/venders/all_list" element={<AllListContainer />} />
            </Route>
          </Routes>
        </SectionForm>
      </Sections>
    </MasterMainSectionBlock>
  );
};

export default MasterMainSection;
