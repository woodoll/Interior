import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './admin/master/login/LoginForm';

const App = () => {
  return (
    <>
      <Route component={LoginForm} path="/" />
    </>
  );
};

export default App;
