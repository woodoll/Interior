import React from 'react';
import { Route } from 'react-router-dom';
import MasterMainPage from './admin/master/common/MasterMainPage';
import LoginFunctions from './admin/master/login/LoginFunctions';

const App = () => {
  return (
    <>
      <Route component={MasterMainPage} path="/master" />
      <Route component={LoginFunctions} path="/login" />
    </>
  );
};

export default App;
