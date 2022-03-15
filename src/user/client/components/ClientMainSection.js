/* #region  import */
import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import { HeaderSection } from 'lib/lib_dir';
import { SidebarSection } from 'lib/lib_dir';
import { MainSection } from 'lib/lib_dir';
import { ClientMenuList } from 'lib/lib_dir';

import { ClientLoginContainer } from 'lib/lib_dir';
import { ClientBuyProductContainer } from 'lib/lib_dir';
/* #endregion */

/* #region  styles */
const ClientMainSectionBlock = styled.div`
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

const ClientMainSection = () => {
  return (
    <ClientMainSectionBlock>
      <HeaderSection pagename="INTERIOR PLAY" pageuser="client" />
      <Sections>
        <SidebarSection MenuList={ClientMenuList} pageuser="client" />
        <SectionForm>
          <Routes>
            <Route path="/" element={<MainSection />}>
              <Route path="signIn" element={<ClientLoginContainer />} />
              <Route
                path="/goods/all_list"
                element={<ClientBuyProductContainer />}
              />
            </Route>
          </Routes>
        </SectionForm>
      </Sections>
    </ClientMainSectionBlock>
  );
};

export default ClientMainSection;
