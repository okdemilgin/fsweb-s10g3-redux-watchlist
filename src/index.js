import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { BrowserRouter } from "react-router-dom"
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from './reducers/filmReducer'

const store = createStore(reducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);