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
  const [pathUrl, setPathUrl] = useState('');
  return (
    <indexBlock>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>주문 관리</Breadcrumb.Item>
        <Breadcrumb.Item>{pathUrl}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route
            path="/all_list"
            element={<AllListContainer setPathUrl={setPathUrl} />}
          />
          <Route
            path="/detail"
            element={<Orders_detail setPathUrl={setPathUrl} />}
          />
          <Route
            path="/delivery"
            element={<Orders_delivery setPathUrl={setPathUrl} />}
          />
          <Route
            path="/return"
            element={<Orders_return setPathUrl={setPathUrl} />}
          />
          <Route
            path="/return_detail"
            element={<Orders_return_detail setPathUrl={setPathUrl} />}
          />
        </Routes>
      </div>
    </indexBlock>
  );
};

export default Orders_Index;
