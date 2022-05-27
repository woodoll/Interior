import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Result, Button, Input } from 'antd';

const InspectionBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inspection = () => {
  const navigate = useNavigate();
  const [authority, setAuthority] = useState('');
  const password = 'a2i12344321';
  const onChange = (e) => {
    setAuthority(e.target.value);
  };
  return (
    <InspectionBlock>
      <Result
        status="403"
        title="뚜-뚜- 공사 중 입니다."
        extra={[
          <Input
            name="password"
            type="password"
            style={{ width: '100px' }}
            onChange={onChange}
          />,
          <Button
            onClick={(e) => {
              if (authority === password) {
                navigate('/master/login');
              }
            }}
          >
            master
          </Button>,
          <Button
            onClick={(e) => {
              if (authority === password) {
                navigate('/vender');
              }
            }}
          >
            vender
          </Button>,
        ]}
      />
    </InspectionBlock>
  );
};

export default Inspection;
