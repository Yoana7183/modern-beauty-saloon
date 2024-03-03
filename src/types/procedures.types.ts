// import { createAsyncThunk } from "@reduxjs/toolkit";

// export type ProcedureThunkType = {
//   manicure: ReturnType<typeof createAsyncThunk>;
//   hair: ReturnType<typeof createAsyncThunk>;
//   cosmetics: ReturnType<typeof createAsyncThunk>;
// };

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
  manicureProceduresInfo: Procedure[];
  manicureProcedureStatus: RequestTypes;
  manicureProcedureError: string;
  hairProceduresInfo: Procedure[];
  hairProcedureStatus: RequestTypes;
  hairProcedureError: string;
  cosmeticsProceduresInfo: Procedure[];
  cosmeticsProcedureStatus: RequestTypes;
  cosmeticsProcedureError: string;
};
export interface ProcedureCardProps {
  title: string;
  description: string;
}