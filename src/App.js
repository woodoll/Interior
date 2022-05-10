import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MasterMainSection from 'user/master/MasterMainSection';
import VenderMainSection from 'user/vender/VenderMainSection';
import ClientMainSection from 'user/client/ClientMainSection';

const App = () => {
  return (
    <Routes>
      <Route path="/master/*" element={<MasterMainSection />} />
      <Route path="/vender/*" element={<VenderMainSection />} />
      <Route path="/client/*" element={<ClientMainSection />} />
    </Routes>
  );
};

export default App;
