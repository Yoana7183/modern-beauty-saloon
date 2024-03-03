import { ProcedureCardProps } from "../types/procedures.types";

export const ProcedureCard = ({ title, description }: ProcedureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
