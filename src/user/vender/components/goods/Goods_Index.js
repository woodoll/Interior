import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import GetGoodsContainer from 'user/vender/containers/goods/GetGoodsContainer';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import Goods_display from 'user/vender/components/goods/Goods_display';
import Goods_detail from 'user/vender/components/goods/Goods_detail';
import Goods_dispaly_list from 'user/vender/components/goods/Goods_display_list';

const indexBlock = styled.div``;

const Goods_Index = () => {
  const [pathUrl, setPathUrl] = useState('');
  return (
    <indexBlock>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>상품 관리</Breadcrumb.Item>
        <Breadcrumb.Item>{pathUrl}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route
            path="/all_list"
            element={<GetGoodsContainer setPathUrl={setPathUrl} />}
          />
          <Route
            path="/add"
            element={<AddContainer setPathUrl={setPathUrl} />}
          />
          <Route
            path="/display"
            element={<Goods_display setPathUrl={setPathUrl} />}
          />
          <Route
            path="/detail"
            element={<Goods_detail setPathUrl={setPathUrl} />}
          />
          <Route
            path="/display_list"
            element={<Goods_dispaly_list setPathUrl={setPathUrl} />}
          />
        </Routes>
      </div>
    </indexBlock>
  );
};

export default Goods_Index;
