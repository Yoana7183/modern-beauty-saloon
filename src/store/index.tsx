import { configureStore } from "@reduxjs/toolkit";
import { RootState, rootReducer } from "./rootReducer";
import loggerMiddleware from "./middware";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;