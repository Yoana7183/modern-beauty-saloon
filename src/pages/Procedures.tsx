import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../store";
import { proceduresThunk, selectManicureData } from "../slice/Procedures.slice";
import { useEffect } from "react";
import ProcedureList from "../components/procedureList";

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
      {cosmeticsProceduresData && (
        <ProcedureList
          data={cosmeticsProceduresData}
          category={cosmeticsProceduresData.category}
        />
      )}
      {manicureProceduresData && (
        <ProcedureList
          data={manicureProceduresData}
          category={manicureProceduresData.category}
        />
      )}
      {hairProceduresData && (
        <ProcedureList
          data={hairProceduresData}
          category={hairProceduresData.category}
        />
      )}
    </div>
  );
};
