import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(90vh - 16px);
  margin: 0 auto;
  background: #fff;
  text-align: left;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
