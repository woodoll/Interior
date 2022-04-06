import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Responsive from 'lib/styles/Responsive';
import SidebarSection from 'lib/common/section/SidebarSection';
import MainSection from 'lib/common/section/MainSection';
import { VenderMenuList } from 'lib/vender/venderMenuList';

import Goods_list from './components/goods/Goods_list';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import Goods_display from 'user/vender/components/goods/Goods_display';
import Goods_detail from 'user/vender/components/goods/Goods_detail';
import Goods_dispaly_list from 'user/vender/components/goods/Goods_display_list';
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
            <Route path="/goods/all_list" element={<Goods_list />} />
            <Route path="/goods/add" element={<AddContainer />} />
            <Route path="/goods/display" element={<Goods_display />} />
            <Route path="/goods/detail" element={<Goods_detail />} />
            <Route
              path="/goods/display_list"
              element={<Goods_dispaly_list />}
            />
            <Route path="/order/all_list" element={<AllListContainer />} />
          </Route>
        </Routes>
      </SectionForm>
    </ContentsSectionBlock>
  );
};

export default ContentsSection;
