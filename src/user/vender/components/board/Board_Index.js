import React, { useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import { Breadcrumb } from 'antd';

import Board_goodsreview from './Board_goodsreview';
import Board_goodsqna from './Board_goodsqna';

const indexBlock = styled.div``;

const Board_Index = () => {
  const [pathUrl, setPathUrl] = useState('');
  return (
    <indexBlock>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>게시판 관리</Breadcrumb.Item>
        <Breadcrumb.Item>{pathUrl}</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background padding_area">
        <Routes>
          <Route
            path="/goodsqna"
            element={<Board_goodsqna setPathUrl={setPathUrl} />}
          />
          <Route
            path="/goodsreview"
            element={<Board_goodsreview setPathUrl={setPathUrl} />}
          />
        </Routes>
      </div>
    </indexBlock>
  );
};

export default Board_Index;
