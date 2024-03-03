import { combineReducers } from "redux";
import procedureReducer from "../slice/Procedures.slice"; // Assuming it's named manicureReducer

export const rootReducer = combineReducers({
  procedures: procedureReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
