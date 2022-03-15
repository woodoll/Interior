import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import { HeaderSection } from 'lib/lib_dir';
import { SidebarSection } from 'lib/lib_dir';
import { MainSection } from 'lib/lib_dir';
import { VenderMenuList } from 'lib/lib_dir';

import AddContainer from '../containers/goods/AddContainer';
import LoginContainer from '../containers/login/LoginContainer';

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
      <HeaderSection pagename="INTERIOR PLAY VENDER" pageuser="vender" />
      <Sections>
        <SidebarSection MenuList={VenderMenuList} pageuser="vender" />
        <SectionForm>
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route path="/signIn" element={<LoginContainer />} />
              <Route path="/goods/add" element={<AddContainer />} />
            </Route>
          </Routes>
        </SectionForm>
      </Sections>
    </VenderMainSectionBlock>
  );
};

export default VenderMainSection;
