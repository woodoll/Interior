import React from 'react';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const CodeSuccessBlock = styled.div``;

const Code_Success = () => {
  const navigate = useNavigate();
  return (
    <CodeSuccessBlock>
      <Result
        status="success"
        title="성공적으로 등록했습니다!"
        extra={[
          <Button key="main" onCLick={() => navigate('/master')}>
            메인으로가기
          </Button>,
          <Button
            type="primary"
            key="codes"
            onClick={() => navigate('/master/codes/all_list')}
          >
            추가등록하기
          </Button>,
        ]}
      />
    </CodeSuccessBlock>
  );
};

export default Code_Success;
