import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import GetGoodsContainer from 'user/vender/containers/goods/GetGoodsContainer';
import AddContainer from 'user/vender/containers/goods/AddContainer';
import Goods_display from 'user/vender/components/goods/Goods_display';
import Goods_detail from 'user/vender/components/goods/Goods_detail';
import Goods_dispaly_list from 'user/vender/components/goods/Goods_display_list';

import Goods_success from './Goods_success';

const IndexBlock = styled.div``;

const Goods_Index = () => {
  return (
    <IndexBlock>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route path="/all_list" element={<GetGoodsContainer />} />
          <Route path="/add" element={<AddContainer />} />
          <Route path="/display" element={<Goods_display />} />
          <Route path="/detail" element={<Goods_detail />} />
          <Route path="/display_list" element={<Goods_dispaly_list />} />
          <Route path="/success" element={<Goods_success />} />
        </Routes>
      </div>
    </IndexBlock>
  );
};

export default Goods_Index;
