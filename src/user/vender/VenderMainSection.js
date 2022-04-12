import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes, Link } from 'react-router-dom';

// import palette from 'lib/styles/palette';
// import Responsive from 'lib/styles/Responsive';
// import HeaderContainer from 'lib/common/section/HeaderContainer';
// import SidebarSection from 'lib/common/section/SidebarSection';
// import MainSection from 'lib/common/section/MainSection';
import { MenuList } from 'lib/vender/venderMenuList';

import SiderMenu from 'lib/common/section/SidebarSection';

import Goods_list from 'user/vender/components/goods/Goods_list';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import Goods_display from 'user/vender/components/goods/Goods_display';
import Goods_detail from 'user/vender/components/goods/Goods_detail';
import Goods_dispaly_list from 'user/vender/components/goods/Goods_display_list';
import AllListContainer from 'user/vender/containers/orders/AllListContainer';
import Orders_detail from 'user/vender/components/orders/Orders_detail';
import Orders_delivery from 'user/vender/components/orders/Orders_delivery';
import Orders_return from 'user/vender/components/orders/Orders_return';
import Orders_return_detail from './components/orders/Orders_return_detail';
import Board_goodsqna from 'user/vender/components/board/Board_goodsqna';
import Board_goodsreview from './components/board/Board_goodsreview';

import VenderLoginContainer from 'user/vender/containers/login/LoginContainer';
// import AddContainer from 'user/vender/containers/goods/AddContainer';
// import AllListContainer from './containers/orders/AllListContainer';
// import ContentsSection from './ContentsSection';

// const VenderMainSectionBlock = styled.div`
//   max-width: 100vw;
//   max-height: 100vh;
//   overflow-y: scroll;
//   margin: 0 auto;

//   @media (max-width: 1024px) {
//     width: 768px;
//   }

//   @media (max-width: 768px) {
//     width: 100%;
//   }

//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Opera*/
//   }
// `;

// const Sections = styled.div`
//   display: flex;
//   flex-direction: row;
//   max-width: 100vw;

//   overflow-y: scroll;

//   -ms-overflow-style: none; /* IE and Edge */
//   scrollbar-width: none; /* Firefox */
//   &::-webkit-scrollbar {
//     display: none; /* Chrome, Safari, Opera*/
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const SectionForm = styled(Responsive)`
//   padding: 1rem;
//   background: ${palette.gray[2]};
// `;

// const VenderMainSection = () => {
//   return (
//     <VenderMainSectionBlock>
//       <HeaderContainer pagename="INTERIOR PLAY VENDER" pageuser="vender" />
//       <Routes>
//         <Route path="/signIn" element={<VenderLoginContainer />} />
//         <Route path="/*" element={<ContentsSection />} />
//       </Routes>
//     </VenderMainSectionBlock>
//   );
// };

// export default VenderMainSection;

import { Layout, Breadcrumb, BackTop } from 'antd';
import HeaderContainer from 'lib/common/section/HeaderContainer';

const LayoutForm = styled(Layout)`
  .logo {
    height: 32px;
    margin: 16px;
    color: #fff;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: 2px;
    vertical-align: center;
    position: sticky;
  }
  .site-layout-background {
    background: #fff;
  }
`;

const { Header, Content, Footer, Sider } = Layout;

const VenderMainSection = () => {
  const [open, setOpen] = useState(false);

  const onCollapse = () => {
    setOpen(!open);
  };

  const urlName = null;

  return (
    <LayoutForm hasSider>
      <BackTop />
      <Sider
        style={{
          position: 'sticky',
          top: '0',
          maxHeight: '100vh',
          overflow: 'scroll-Y',
        }}
        collapsible
        collapsed={open}
        onCollapse={onCollapse}
      >
        <div className="logo">
          <Link to="/vender" style={{ color: '#fff' }}>
            InteriorPlay
          </Link>
        </div>
        <SiderMenu urlName={urlName} />
      </Sider>
      <Layout className="site-layout" style={{ overflow: 'scroll-y' }}>
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <HeaderContainer pagename="INTERIOR PLAY VENDER" pageuser="vender" />
        </Header>
        <Content
          style={{
            margin: '0 16px',
            overflow: 'initial',
            minHeight: '90vh',
          }}
        >
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{urlName}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center', minHeight: '100%' }}
          >
            <Routes>
              <Route path="/signIn" element={<VenderLoginContainer />} />
              <Route path="/goods/all_list" element={<Goods_list />} />
              <Route path="/goods/add" element={<AddContainer />} />
              <Route path="/goods/display" element={<Goods_display />} />
              <Route path="/goods/detail" element={<Goods_detail />} />
              <Route
                path="/goods/display_list"
                element={<Goods_dispaly_list />}
              />
              <Route path="/orders/all_list" element={<AllListContainer />} />
              <Route path="/orders/order_detail" element={<Orders_detail />} />
              <Route path="/orders/delivery" element={<Orders_delivery />} />
              <Route path="/orders/return" element={<Orders_return />} />
              <Route
                path="/orders/return_detail"
                element={<Orders_return_detail />}
              />
              <Route path="/board/goodsqna" element={<Board_goodsqna />} />
              <Route
                path="/board/goodsreview"
                element={<Board_goodsreview />}
              />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Copyright© 2020.InteriorPlay.All rights reserved
        </Footer>
      </Layout>
    </LayoutForm>
  );
};

export default VenderMainSection;
