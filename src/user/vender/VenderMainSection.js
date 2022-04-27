import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import SiderMenu from 'lib/common/section/SidebarSection';
import HeaderContainer from 'lib/common/section/HeaderContainer';

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
      <Header className="site-layout-background" style={{ padding: 0 }}>
        <HeaderContainer pagename="INTERIOR PLAY VENDER" pageuser="vender" />
      </Header>
      <Layout hasSider className="site-layout" style={{ overflow: 'scroll-y' }}>
        <Sider
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
          <SiderMenu />
        </Sider>
        <Layout style={{ overflow: 'scroll-y' }}>
          <Content
            style={{
              margin: '0 16px',
              overflow: 'initial',
              minHeight: '90vh',
            }}
          >
            <Routes>
              <Route path="/auth/*" element={<Auth_Index />} />
              <Route path="/orders/*" element={<Orders_Index />} />
              <Route path="/goods/*" element={<Goods_Index />} />
              <Route path="/board/*" element={<Board_Index />} />
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
