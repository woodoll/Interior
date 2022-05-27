import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import MasterCodeContainer from 'user/master/containers/codes/MasterCodeContainer';
import CodeSuccess from './CodeSuccess';

const CodesIndexBlock = styled.div``;

const CodesIndex = () => {
  return (
    <CodesIndexBlock>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route path="/all_list" element={<MasterCodeContainer />} />
          <Route path="/success" element={<CodeSuccess />} />
        </Routes>
      </div>
    </CodesIndexBlock>
  );
};

export default CodesIndex;
