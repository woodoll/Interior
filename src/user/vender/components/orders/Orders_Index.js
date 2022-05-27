import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import AllListContainer from 'user/vender/containers/orders/AllListContainer';
import Orders_detail from 'user/vender/components/orders/Orders_detail';
import Orders_delivery from 'user/vender/components/orders/Orders_delivery';
import Orders_return from 'user/vender/components/orders/Orders_return';
import Orders_return_detail from 'user/vender/components/orders/Orders_return_detail';

const indexBlock = styled.div``;

const Orders_Index = () => {
  return (
    <indexBlock>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route path="/all_list" element={<AllListContainer />} />
          <Route path="/detail" element={<Orders_detail />} />
          <Route path="/delivery" element={<Orders_delivery />} />
          <Route path="/return" element={<Orders_return />} />
          <Route path="/return_detail" element={<Orders_return_detail />} />
        </Routes>
      </div>
    </indexBlock>
  );
};

export default Orders_Index;
