import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterMainSection from 'user/master/components/MasterMainSection';
import VenderMainSection from 'user/vender/components/VenderMainSection';
import ClientMainSection from 'user/client/components/ClientMainSection';

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
