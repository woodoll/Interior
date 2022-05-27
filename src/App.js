import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MasterMainSection from 'user/master/MasterMainSection';
import ClientMainSection from 'user/client/ClientMainSection';
import VenderMainSection from 'user/vender/VenderMainSection';

import Inspection from 'Inspection';

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/inspection');
  }, []);
  return (
    <Routes>
      <Route path="/inspection" element={<Inspection />} />
      <Route path="/master/*" element={<MasterMainSection />} />
      <Route path="/vender/*" element={<VenderMainSection />} />
    </Routes>
  );
};

export default App;
