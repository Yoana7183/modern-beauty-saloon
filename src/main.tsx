import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from 'react-redux';
import rootReducer from "./store/index.tsx";
import { createStore } from "@reduxjs/toolkit";

const store = createStore(rootReducer);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
