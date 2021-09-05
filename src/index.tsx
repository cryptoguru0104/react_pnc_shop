import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import store from "./store";
import { getToken } from './utilities/storage'
import { getAuthByToken } from './store/profile/action'

// get authentication token from localStorage and get authentication info from api
if (getToken()) {
  store.dispatch(getAuthByToken())
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
