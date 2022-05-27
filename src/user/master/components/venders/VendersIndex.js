import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import AllListContainer from 'user/master/containers/venders/AllListContainer';
import VenderDetailContainer from 'user/master/containers/venders/VendersDetailContainer';

const VenderIndexBlock = styled.div``;

const Orders_Index = () => {
  const [modalData, setModalData] = useState({});
  return (
    <VenderIndexBlock>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route
            path="/all_list"
            element={<AllListContainer setModalData={setModalData} />}
          />
          <Route
            path="/all_list/detail"
            element={<VenderDetailContainer modalData={modalData} />}
          />
        </Routes>
      </div>
    </VenderIndexBlock>
  );
};

export default Orders_Index;
