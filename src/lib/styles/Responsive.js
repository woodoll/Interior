import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  min-height: calc(90vh - 5rem);
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
