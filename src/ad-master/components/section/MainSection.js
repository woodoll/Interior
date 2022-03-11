import React from 'react';
import styled from 'styled-components';
import palette from '../../../styles/palette';
import Responsive from '../../../styles/Responsive';
import { Outlet } from 'react-router-dom';

const MainSectionBlock = styled.div`
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

const MainSection = () => {
  return (
    <MainSectionBlock>
      <SectionForm>
        <Outlet />
      </SectionForm>
    </MainSectionBlock>
  );
};

export default MainSection;
