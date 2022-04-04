import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import HeaderContainer from 'lib/common/section/HeaderContainer';
import SidebarSection from 'lib/common/section/SidebarSection';
import MainSection from 'lib/common/section/MainSection';
import { VenderMenuList } from 'lib/vender/venderMenuList';

import VenderLoginContainer from 'user/vender/containers/login/LoginContainer';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import AllListContainer from './containers/orders/AllListContainer';
import ContentsSection from './ContentsSection';

const VenderMainSectionBlock = styled.div`
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

const VenderMainSection = () => {
  return (
    <VenderMainSectionBlock>
      <HeaderContainer pagename="INTERIOR PLAY VENDER" pageuser="vender" />
      <Routes>
        <Route path="/signIn" element={<VenderLoginContainer />} />
        <Route path="/*" element={<ContentsSection />} />
      </Routes>
    </VenderMainSectionBlock>
  );
};

export default VenderMainSection;
