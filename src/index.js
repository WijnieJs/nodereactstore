import React from 'react';
import ReactDOM from 'react-dom';
 import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import App from './App';

import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

 import productReducer from "./store/reducers/product";
import authReducer from "./store/reducers/auth"
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;


    const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
