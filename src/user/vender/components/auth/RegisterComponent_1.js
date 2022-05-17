/* #region  import */
import React from 'react';
import styled from 'styled-components';
import Responsive from 'lib/styles/Responsive';

import { Collapse, Form, Space, Checkbox, Button } from 'antd';
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
const RegisterComponent_1 = ({ next }) => {
  const { Panel } = Collapse;
  const MaxWidth = { width: '100%', color: 'red' };

  const onFinish = (values) => {
    console.log(values);
    next();
  };

  return (
    <RegisterComponentBlock>
      <Form onFinish={onFinish}>
        <Space direction="vertical" size={12} style={MaxWidth}>
          <Collapse>
            <Panel header="개인정보 수집 동의 약관" key="1">
              <div>개인정보 이용입니다.</div>
            </Panel>
          </Collapse>
          <Form.Item
            name="agree1"
            rules={[{ required: true, message: '약관에 동의해주세요' }]}
          >
            <Checkbox.Group>
              <Checkbox value={true}>동의함</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Collapse>
            <Panel header="결제" key="1">
              <div>돈은 꼭 지불해야합니다.</div>
            </Panel>
          </Collapse>
          <Form.Item
            name="agree2"
            rules={[{ required: true, message: '약관에 동의해주세요' }]}
          >
            <Checkbox.Group>
              <Checkbox value={true}>동의함</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Collapse>
            <Panel header="기타" key="1">
              <div>그 외의 사항도 동의해주세요.</div>
            </Panel>
          </Collapse>
          <Form.Item
            name="agree3"
            rules={[{ required: true, message: '약관에 동의해주세요' }]}
          >
            <Checkbox.Group>
              <Checkbox value={true}>동의함</Checkbox>
            </Checkbox.Group>
          </Form.Item>
          <Button
            style={{ width: '100%' }}
            size="large"
            type="primary"
            htmlType="submit"
          >
            약관 동의
          </Button>
        </Space>
      </Form>
    </RegisterComponentBlock>
  );
};

export default RegisterComponent_1;
