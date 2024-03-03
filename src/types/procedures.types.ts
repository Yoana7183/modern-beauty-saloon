import { createAsyncThunk } from "@reduxjs/toolkit";

export type ManicureThunkType = {
  procedures: ReturnType<typeof createAsyncThunk>;
};

export type RequestTypes =
  | "pending"
  | "idle"
  | "empty"
  | "succeeded"
  | "failure";

export type Procedure = {
  id: number;
  procedure: string;
  averageTime: string;
  coveringHealingTime: string;
  specialInstructionsBefore: string;
  specialInstructionsAfter: string;
  price: string;
};
export type ManicureInitTypes = {
  procedures: Procedure[];
  status: RequestTypes;
  error: string;
};
