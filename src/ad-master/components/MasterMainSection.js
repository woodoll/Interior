import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../../styles/Responsive';
import { Route, Routes } from 'react-router-dom';
import HeaderSection from './section/HeaderSection';
import SidebarSection from './section/SidebarSection';
import MainSection from './section/MainSection';
import LoginContainer from '../containers/login/LoginContainer';
import AllListContainer from '../containers/venders/AllListContainer';

const MasterMainPageBlock = styled.div`
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

const MasterMainSection = () => {
  return (
    <MasterMainPageBlock>
      <HeaderSection />
      <Sections>
        <SidebarSection />
        <SectionForm>
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route path="/signIn" element={<LoginContainer />} />
              <Route path="/venders/all_list" element={<AllListContainer />} />
            </Route>
          </Routes>
        </SectionForm>
      </Sections>
    </MasterMainPageBlock>
  );
};

export default MasterMainSection;
