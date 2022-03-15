import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';

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
