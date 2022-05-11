import React from 'react';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Goods_successBlock = styled.div``;

const Goods_success = () => {
  const navigate = useNavigate();
  return (
    <Goods_successBlock>
      <Result
        status="success"
        title="상품등록에 성공했습니다!"
        subTitle="광고문구 혹은 카피라이트"
        extra={[
          <Button key="list">상품 조회하기</Button>,
          <Button
            type="primary"
            key="moreAdd"
            onClick={() => navigate('/goods/add')}
          >
            추가상품 등록하기
          </Button>,
        ]}
      />
    </Goods_successBlock>
  );
};

export default Goods_success;
