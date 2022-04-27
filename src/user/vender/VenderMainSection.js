import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import SiderMenu from 'lib/common/section/SidebarSection';
import HeaderContainer from 'lib/common/section/HeaderContainer';
<<<<<<< HEAD
=======
=======
import Goods_list from 'user/vender/components/goods/Goods_list';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import Goods_display from 'user/vender/components/goods/Goods_display';
import Goods_detail from 'user/vender/components/goods/Goods_detail';
import Goods_dispaly_list from 'user/vender/components/goods/Goods_display_list';
import AllListContainer from 'user/vender/containers/orders/AllListContainer';

// import VenderLoginContainer from 'user/vender/containers/login/LoginContainer';
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

import { Layout, Menu, Breadcrumb, BackTop } from 'antd';
import {
  PieChartOutlined,
  CreditCardOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';
>>>>>>> parent of 872dc29 (04/12)

import Auth_Index from './components/auth/Auth_index';
import Orders_Index from './components/orders/Orders_Index';
import Goods_Index from './components/goods/Goods_Index';
import Board_Index from 'user/vender/components/board/Board_Index';

import { Layout, BackTop } from 'antd';
>>>>>>> 304ed38 (04/27-1)

import Auth_Index from './components/auth/Auth_index';
import Orders_Index from './components/orders/Orders_Index';
import Goods_Index from './components/goods/Goods_Index';
import Board_Index from 'user/vender/components/board/Board_Index';

import { Layout, BackTop } from 'antd';

const LayoutForm = styled(Layout)`
  width: 100vw;
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
  .padding_area {
    padding: 0 24px;
    text-align: center;
    min-height: 100%;
  }
  .PageHeader {
    margin: 0;
    padding: 0;
  }
`;

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const VenderMainSection = () => {
  const [open, setOpen] = useState(false);

  // const params = useParams();
  // const urlPath = MenuList[params.url];

  const onCollapse = () => {
    setOpen(!open);
  };

  return (
    <LayoutForm>
      <BackTop />
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 304ed38 (04/27-1)
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <HeaderContainer pagename="INTERIOR PLAY VENDER" pageuser="vender" />
      </Header>
      <Layout hasSider className="site-layout" style={{ overflow: 'scroll-y' }}>
        <Sider
<<<<<<< HEAD
=======
=======
      <Sider
        style={{
          position: 'sticky',
          top: '0',
          maxHeight: '100vh',
        }}
        collapsible
        collapsed={open}
        onCollapse={onCollapse}
      >
        <div className="logo">InteriorPlay</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <SubMenu
            key={MenuList[0].key}
            icon={<PieChartOutlined />}
            title={MenuList[0].title}
          >
            <Menu.Item key={MenuList[0].sub[0].key}>
              <Link to="/">{MenuList[0].sub[0].title}</Link>
            </Menu.Item>
            <Menu.Item key={MenuList[0].sub[1].key}>
              <Link to="/">{MenuList[0].sub[1].title}</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={MenuList[1].key}
            icon={<CreditCardOutlined />}
            title={MenuList[1].title}
          >
            <Menu.Item key={MenuList[1].sub[0].key}>
              <Link to="/vender/orders/all_list">
                {MenuList[1].sub[0].title}
              </Link>
            </Menu.Item>
            <Menu.Item key={MenuList[1].sub[1].key}>
              <Link to="/vender/orders/delivery">
                {MenuList[1].sub[1].title}
              </Link>
            </Menu.Item>
            <Menu.Item key={MenuList[1].sub[2].key}>
              <Link to="/vender/orders/excahnge">
                {MenuList[1].sub[2].title}
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key={MenuList[2].key}
            icon={<FormatPainterOutlined />}
            title={MenuList[2].title}
          >
            <Menu.Item key={MenuList[2].sub[0].key}>
              <Link to="/vender/goods/all_list">
                {MenuList[2].sub[0].title}
              </Link>
            </Menu.Item>
            <Menu.Item key={MenuList[2].sub[1].key}>
              <Link to="/vender/goods/add">{MenuList[2].sub[1].title}</Link>
            </Menu.Item>
            <Menu.Item key={MenuList[2].sub[2].key}>
              <Link to="/vender/goods/display">{MenuList[2].sub[2].title}</Link>
            </Menu.Item>
            <Menu.Item key={MenuList[2].sub[3].key}>
              <Link to="/vender/goods/display_list">
                {MenuList[2].sub[3].title}
              </Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ overflow: 'scroll-y' }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content
>>>>>>> parent of 872dc29 (04/12)
>>>>>>> 304ed38 (04/27-1)
          style={{
            position: 'sticky',
            top: '0',
            minHeight: '90vh',
            overflow: 'scroll-Y',
          }}
          collapsible
          collapsed={open}
          onCollapse={onCollapse}
        >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 304ed38 (04/27-1)
          <SiderMenu />
        </Sider>
        <Layout style={{ overflow: 'scroll-y' }}>
          <Content
            style={{
              margin: '0 16px',
              overflow: 'initial',
              minHeight: '90vh',
            }}
<<<<<<< HEAD
          >
            <Routes>
              <Route path="/auth/*" element={<Auth_Index />} />
              <Route path="/orders/*" element={<Orders_Index />} />
              <Route path="/goods/*" element={<Goods_Index />} />
              <Route path="/board/*" element={<Board_Index />} />
=======
          >
            <Routes>
              <Route path="/auth/*" element={<Auth_Index />} />
              <Route path="/orders/*" element={<Orders_Index />} />
              <Route path="/goods/*" element={<Goods_Index />} />
              <Route path="/board/*" element={<Board_Index />} />
=======
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>User</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: 'center', minHeight: '100%' }}
          >
            <Routes>
              <Route path="/goods/all_list" element={<Goods_list />} />
              <Route path="/goods/add" element={<AddContainer />} />
              <Route path="/goods/display" element={<Goods_display />} />
              <Route path="/goods/detail" element={<Goods_detail />} />
              <Route
                path="/goods/display_list"
                element={<Goods_dispaly_list />}
              />
              <Route path="/orders/all_list" element={<AllListContainer />} />
>>>>>>> parent of 872dc29 (04/12)
>>>>>>> 304ed38 (04/27-1)
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Copyright© 2020.InteriorPlay.All rights reserved
          </Footer>
        </Layout>
      </Layout>
    </LayoutForm>
  );
};

export default VenderMainSection;
