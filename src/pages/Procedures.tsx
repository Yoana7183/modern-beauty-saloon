import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store";
import { proceduresThunk, selectManicureData } from "../slice/Procedures.slice";
import { useEffect } from "react";
import { ProcedureCardExtended } from "../components/procedureCardExtended";

export const Procedures = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cosmeticsProceduresData = useAppSelector(
    selectManicureData.cosmeticsProceduresData
  );
  const manicureProceduresData = useAppSelector(
    selectManicureData.manicureProceduresData
  );
  const hairProceduresData = useAppSelector(
    selectManicureData.hairProceduresData
  );
  useEffect(() => {
    dispatch(proceduresThunk.cosmetics());
    dispatch(proceduresThunk.manicure());
    dispatch(proceduresThunk.hair());
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Cosmetic Procedures
      </h1>

      {cosmeticsProceduresData.map((procedure, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {procedure.procedure}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {manicureProceduresData.map((procedure, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {procedure.procedure}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      {hairProceduresData.map((procedure, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {procedure.procedure}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  );
};
