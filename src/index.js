import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "./App.css";
// redux
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// reducers import
import postReducer from "./redux/reducers/postReducer";

// composers
const composedEnhancers = composeWithDevTools || compose;

// reducers
const reducers = combineReducers({
  posts: postReducer,
});

// store
const store = createStore(reducers, composedEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

