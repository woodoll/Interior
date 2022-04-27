import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import VenderLoginContainer from 'user/vender/containers/auth/LoginContainer';
import VenderRegisterComponent from './RegisterComponent';

const IndexBlock = styled.div`
  margin-top: 1rem;
`;

const Auth_Index = () => {
  return (
    <IndexBlock>
      <Breadcrumb />
      <div className="site-layout-background padding_area">
        <Routes>
          <Route path="/login" element={<VenderLoginContainer />} />
          <Route path="/register" element={<VenderRegisterComponent />} />
        </Routes>
      </div>
    </IndexBlock>
  );
};

export default Auth_Index;
