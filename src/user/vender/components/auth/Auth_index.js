import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import VenderLoginContainer from 'user/vender/containers/auth/LoginContainer';
import VenderRegisterComponent from './RegisterComponent';

const IndexBlock = styled.div`
  width: 100%;
`;

const Auth_Index = () => {
  return (
    <IndexBlock>
      <Routes>
        <Route path="/login" element={<VenderLoginContainer />} />
        <Route path="/register" element={<VenderRegisterComponent />} />
      </Routes>
    </IndexBlock>
  );
};

export default Auth_Index;
