import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ManicureInitTypes, Procedure } from "../types/procedures.types";
import { RootState } from "../store";

const initialState: ManicureInitTypes = {
  procedures: [],
  status: "idle",
  error: "",
};

export const manicureThunk = {
  procedures: createAsyncThunk(
    "manicure/fetchProcedures", // Action type prefix
    async () => {
      const url = "http://localhost:3000/manicure"; // Adjust the URL accordingly
      const response = await axios.get<Procedure[]>(url); // Make a GET request using Axios
      return response.data; // Return the data received from the API
    }
  ),
};

const manicureSlice = createSlice({
  name: "manicure",
  initialState,
  reducers: {
    resetManicureInfo: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(manicureThunk.procedures.pending, (state) => {
        state.status = "pending";
        state.error = "";
      })
      .addCase(manicureThunk.procedures.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.procedures = action.payload;
      })
      .addCase(manicureThunk.procedures.rejected, (state) => {
        state.error = "Unknown error";
      });
  },
});

export const { resetManicureInfo } = manicureSlice.actions;

export default manicureSlice.reducer;

export const selectManicureData = {
  manicureProceduresData: (state: RootState) => state.manicure.procedures,
};
