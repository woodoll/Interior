import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import RootReducer, { RootSaga } from './Reducer/RootReducer';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
);

sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
