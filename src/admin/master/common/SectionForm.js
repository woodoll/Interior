import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import Responsive from '../../../styles/Responsive';
import LoginFunctions from '../login/LoginFunctions';
import approve from '../venders/approve';

const SectionPageBlock = styled(Responsive)`
  //  스크롤바 제거
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const SectionForm = () => {
  return (
    <SectionPageBlock>
      <Route component={LoginFunctions} path="/master/login" />
      <Route component={approve} path="/master/venders/approve" />
    </SectionPageBlock>
  );
};

export default SectionForm;
