import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MasterMainSection from 'user/master/MasterMainSection';
import ClientMainSection from 'user/client/ClientMainSection';
import VenderMainSection from 'user/vender/VenderMainSection';

import { Result, Button, Input } from 'antd';

const App = () => {
  const [authority, setAuthority] = useState('');
  return (
    <>
      <Result
        status="403"
        title="뚜-뚜- 공사 중 입니다."
        extra={<Input style={{ width: '100px' }} value={setAuthority} />}
      />
      {authority === 'a2i12344321' ? (
        <>
          <Button>master</Button>
          <Button>vender</Button>
        </>
      ) : null}
      <Routes>
        <Route path="/master/*" element={<MasterMainSection />} />
        <Route path="/vender/*" element={<VenderMainSection />} />
        <Route path="/vender/*" element={<VenderMainSection />} />
      </Routes>
    </>
  );
};

export default App;
