import React from "react";
import {
  ProcedureCardExtended,
  ProcedureCardProps,
} from "./procedureCardExtended";
import { ProcedureType } from "../types/procedures.types";

type ProcedureListProps = {
  data: ProcedureType;
  category: string;
};

const ProcedureList: React.FC<ProcedureListProps> = ({ data, category }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-8">{category}</h1>
      {Array.isArray(data.procedures) &&
        data.procedures.map((procedure: ProcedureCardProps, index: number) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
              {procedure.procedure}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              <ProcedureCardExtended
                procedure={procedure.procedure}
                averageTime={procedure.averageTime}
                coveringHealingTime={procedure.coveringHealingTime}
                specialInstructionsBefore={procedure.specialInstructionsBefore}
                specialInstructionsAfter={procedure.specialInstructionsAfter}
                price={procedure.price}
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default ProcedureList;
