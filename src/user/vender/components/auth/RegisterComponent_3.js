import React from 'react';
import styled from 'styled-components';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const RegisterComponent_3Block = styled.div``;

const RegisterComponent_3 = () => {
  const navigate = useNavigate();
  return (
    <RegisterComponent_3Block>
      <Result
        status="success"
        title="회원가입 요청이 완료되었습니다! 승인이 완료될 때까지 잠시만 기다려주세요."
        subTitle="회원가입 승인은 평균 하루 이내에 완료됩니다."
        extra={[
          <Button onClick={() => navigate('/inspection')}>
            메인으로 이동하기
          </Button>,
          <Button onClick={() => navigate('/vender/auth/login')} type="primary">
            로그인 하러가기
          </Button>,
        ]}
      />
    </RegisterComponent_3Block>
  );
};

export default RegisterComponent_3;
