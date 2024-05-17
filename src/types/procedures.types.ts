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
export type ProcedureType = {
  category: string;
  procedures: Procedure[];
};

export type ProcedureInitTypes = {
  manicureProceduresInfo: ProcedureType | null;
  manicureProcedureStatus: RequestTypes;
  manicureProcedureError: string;
  hairProceduresInfo: ProcedureType | null;
  hairProcedureStatus: RequestTypes;
  hairProcedureError: string;
  cosmeticsProceduresInfo: ProcedureType | null;
  cosmeticsProcedureStatus: RequestTypes;
  cosmeticsProcedureError: string;
};
export interface ProcedureCardProps {
  title: string;
  description: string;
}
