import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import VenderLoginContainer from 'user/vender/containers/auth/LoginContainer';
import VenderRegisterComponent from './RegisterComponent';

const IndexBlock = styled.div`
  width: 100vw;
`;

const AuthIndex = () => {
  return (
    <IndexBlock>
      <Routes>
        <Route path="/login" element={<VenderLoginContainer />} />
        <Route path="/register" element={<VenderRegisterComponent />} />
      </Routes>
    </IndexBlock>
  );
};

export default AuthIndex;
