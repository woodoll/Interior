import React, { useState } from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Steps, PageHeader, Space, Divider } from 'antd';
import RegisterComponent_1 from './RegisterComponent_1';
import VenderRegisterContainer from 'user/vender/containers/auth/RegisterContainer';
import RegisterComponent_3 from './RegisterComponent_3';

const RegisterComponentBlock = styled(Responsive)`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const { Step } = Steps;

const VenderRegisterComponent = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  return (
    <RegisterComponentBlock>
      <Space direction="vertical" size={12}>
        <Divider style={{ border: '#fff' }} />
        <PageHeader
          className="PageHeader"
          title="인테리어 플레이"
          subTitle="판매사 회원가입"
        />
        <Steps size="small" current={current}>
          <Step title="약관동의" />
          <Step title="정보입력" />
          <Step title="가입완료" />
        </Steps>
        <Divider />
        {current < 1 && (
          <>
            <RegisterComponent_1 next={next} />
          </>
        )}
        {current === 1 && (
          <>
            <VenderRegisterContainer next={next} />
          </>
        )}
        {current > 1 && (
          <>
            <RegisterComponent_3 />
          </>
        )}
      </Space>
    </RegisterComponentBlock>
  );
};

export default VenderRegisterComponent;
