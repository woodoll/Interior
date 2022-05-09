import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import MasterMainSection from 'user/master/MasterMainSection';
import ClientMainSection from 'user/client/ClientMainSection';
import VenderLoginContainer from 'user/vender/containers/auth/LoginContainer';

const user = localStorage.getItem('user');

const App = ({ user }) => {
  return <VenderLoginContainer user={user} />;
};

export default App;
