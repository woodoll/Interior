import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import SidebarSection from 'lib/common/section/SidebarSection';
import MainSection from 'lib/common/section/MainSection';
import { VenderMenuList } from 'lib/vender/venderMenuList';

import AddContainer from 'user/vender/containers/goods/AddContainer';
import AllListContainer from 'user/vender/containers/orders/AllListContainer';

const ContentsSectionBlock = styled.div`
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

const ContentsSection = () => {
  return (
    <ContentsSectionBlock>
      <SidebarSection MenuList={VenderMenuList} pageuser="vender" />
      <SectionForm>
        <Routes>
          <Route path="/" element={<MainSection />}>
            <Route path="/goods/add" element={<AddContainer />} />
            <Route path="/order/all_list" element={<AllListContainer />} />
          </Route>
        </Routes>
      </SectionForm>
    </ContentsSectionBlock>
  );
};

export default ContentsSection;
