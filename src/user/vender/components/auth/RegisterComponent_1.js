/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Collapse, Divider, Space, Checkbox, Button } from 'antd';
/* #endregion */

/* #region  styles */
const RegisterComponentBlock = styled.div``;

const AddSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    width: 100px;
  }

  Input {
    width: 200px;
  }
`;

/* #endregion */
const RegisterComponent_1 = () => {
  const { Panel } = Collapse;

  const MaxWidth = { width: '100%', color: 'red' };

  const genExtra = () => {
    return (
      <div>
        <Checkbox>동의합니다.</Checkbox>
      </div>
    );
  };
  return (
    <RegisterComponentBlock>
      <Space direction="vertical" size={12} style={MaxWidth}>
        <Collapse collapsible="header">
          <Panel header="개인정보 수집 동의 약관" key="1" extra={genExtra()}>
            <div>개인정보를 내놓으세요.</div>
          </Panel>
        </Collapse>
        <Collapse collapsible="header">
          <Panel header="결제" key="1" extra={genExtra()}>
            <div>돈은 꼭 지불해야합니다.</div>
          </Panel>
        </Collapse>
        <Collapse collapsible="header">
          <Panel header="기타" key="1" extra={genExtra()}>
            <div>그 외의 사항도 동의해주세요.</div>
          </Panel>
        </Collapse>
      </Space>
    </RegisterComponentBlock>
  );
};

export default RegisterComponent_1;
