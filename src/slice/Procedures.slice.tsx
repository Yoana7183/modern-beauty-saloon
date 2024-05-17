import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { ProcedureInitTypes as ProceduresInitTypes } from "../types/procedures.types";
import { RootState } from "../store/rootReducer";

const initialState: ProceduresInitTypes = {
  manicureProceduresInfo: null,
  manicureProcedureStatus: "idle",
  manicureProcedureError: "",
  hairProceduresInfo: null,
  hairProcedureStatus: "idle",
  hairProcedureError: "",
  cosmeticsProceduresInfo: null,
  cosmeticsProcedureStatus: "idle",
  cosmeticsProcedureError: "",
};

export const proceduresThunk = {
  manicure: createAsyncThunk("manicure/fetchProcedures", async () => {
    const url = "http://localhost:3000/manicure";
    const response = await axios.get(url);
    return response.data;
  }),
  hair: createAsyncThunk("hair/fetchProcedures", async () => {
    const url = "http://localhost:3000/hair";
    const response = await axios.get(url);
    return response.data;
  }),
  cosmetics: createAsyncThunk("cosmetics/fetchProcedures", async () => {
    const url = "http://localhost:3000/cosmetics";
    const response = await axios.get(url);
    return response.data;
  }),
};

const manicureSlice = createSlice({
  name: "procedures",
  initialState,
  reducers: {
    resetProceduresInfo: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(proceduresThunk.manicure.pending, (state) => {
        state.manicureProcedureStatus = "pending";
        state.manicureProcedureError = "";
      })
      .addCase(proceduresThunk.manicure.fulfilled, (state, action) => {
        state.manicureProcedureStatus = "succeeded";
        state.manicureProceduresInfo = action.payload;
      })
      .addCase(proceduresThunk.manicure.rejected, (state) => {
        state.manicureProcedureError = "Unknown error";
      })
      .addCase(proceduresThunk.hair.pending, (state) => {
        state.hairProcedureStatus = "pending";
        state.hairProcedureError = "";
      })
      .addCase(proceduresThunk.hair.fulfilled, (state, action) => {
        state.hairProcedureStatus = "succeeded";
        state.hairProceduresInfo = action.payload;
      })
      .addCase(proceduresThunk.hair.rejected, (state) => {
        state.hairProcedureError = "Unknown error";
      })
      .addCase(proceduresThunk.cosmetics.pending, (state) => {
        state.cosmeticsProcedureStatus = "pending";
        state.manicureProcedureError = "";
      })
      .addCase(proceduresThunk.cosmetics.fulfilled, (state, action) => {
        state.cosmeticsProcedureStatus = "succeeded";
        state.cosmeticsProceduresInfo = action.payload;
      })
      .addCase(proceduresThunk.cosmetics.rejected, (state) => {
        state.cosmeticsProcedureError = "Unknown error";
      });
  },
});

export const { resetProceduresInfo: resetManicureInfo } = manicureSlice.actions;

export default manicureSlice.reducer;

export const selectManicureData = {
  manicureProceduresData: (state: RootState) =>
    state.procedures.manicureProceduresInfo,
  cosmeticsProceduresData: (state: RootState) =>
    state.procedures.cosmeticsProceduresInfo,
  hairProceduresData: (state: RootState) => state.procedures.hairProceduresInfo,
};
