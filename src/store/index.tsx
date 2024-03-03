import { combineReducers } from "redux";
import manicureReducer from "../slice/Mnicure.slice"; // Assuming it's named manicureReducer

const rootReducer = combineReducers({
  manicure: manicureReducer,
  // Add other reducers here
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
