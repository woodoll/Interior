import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterMainSection from './ad-master/components/MasterMainSection';
import VenderMainSection from './ad-vneder/components/VenderMainSection';

const App = () => {
  return (
    <Routes>
      <Route path="/master/*" element={<MasterMainSection />} />
      <Route path="/vender/*" element={<VenderMainSection />} />
    </Routes>
  );
};

export default App;
