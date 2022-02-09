import React from 'react';
import { Route } from 'react-router-dom';
import MasterMainPage from './admin/master/common/MasterMainPage';
import LoginKakaoFunctions from './admin/master/login/LoginKakaoFuncions';

const App = () => {
  return (
    <>
      <Route component={MasterMainPage} path="/master" />
      <Route component={LoginKakaoFunctions} path="/home/user_kakao/siginIn" />
    </>
  );
};

export default App;
