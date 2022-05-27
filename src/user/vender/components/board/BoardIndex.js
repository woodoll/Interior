import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import BoardGoodsreview from './BoardGoodsreview';
import BoardGoodsqna from './BoardGoodsqna';

const indexBlock = styled.div``;

const BoardIndex = () => {
  return (
    <indexBlock>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route path="/goodsqna" element={<BoardGoodsqna />} />
          <Route path="/goodsreview" element={<BoardGoodsreview />} />
        </Routes>
      </div>
    </indexBlock>
  );
};

export default BoardIndex;
