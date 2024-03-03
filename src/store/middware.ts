import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = () => (next) => (action) => {
//   console.log("Dispatching:", action);
  const result = next(action);
//   console.log("New state:", store.getState());
  return result;
};

export default loggerMiddleware;
