import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Responsive from 'lib/styles/Responsive';
import { venderChangeState } from 'api/orders';

const AllListComponentBlock = styled(Responsive)``;

const AllListComponent = ({ orders }) => {
  const navigate = useNavigate();
  console.log('orderList = ', orders);
  const onClick = ({ uuid, orderState }) => venderChangeState(uuid, orderState);
  const state = '03';
  if (orders.result === 'login') {
    navigate('/vender/signIn');
  }
  return (
    <AllListComponentBlock>
      {orders && (
        <div>
          {orders.map((order, index) => (
            <div key={index}>
              <div>구매 코드 : {order.orderCode}</div>
              <div>구매자 이름 : {order.buyerName}</div>
              <div>구매 날짜 : {order.orderDate}</div>
              <div>상품 코드 : {order.productCode}</div>
              <div>상품 이름 : {order.productName}</div>
              <div>결제 수단 : {order.paymentType}</div>
              <div>구매 상태 : {order.orderState}</div>
              배송 처리하기
              <button onClick={() => venderChangeState(order.uuid, state)}>
                배송
              </button>
              <hr />
            </div>
          ))}
        </div>
      )}
    </AllListComponentBlock>
  );
};

export default AllListComponent;
