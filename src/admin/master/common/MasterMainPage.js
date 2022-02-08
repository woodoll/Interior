import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import HeaderForm from './HeaderForm';
import SectionForm from './SectionForm';
import SidemenuContainer from './SidebarContainer';

const MasterMainPageBlock = styled.div`
  width: 100%;
  min-height: calc(90vh - 5rem);
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  background: ${palette.gray[5]};
`;

const MasterMainPage = () => {
  return (
    <MasterMainPageBlock>
      <HeaderForm />
      <MainSection>
        <SidemenuContainer />
        <SectionForm />
      </MainSection>
    </MasterMainPageBlock>
  );
};

export default MasterMainPage;
