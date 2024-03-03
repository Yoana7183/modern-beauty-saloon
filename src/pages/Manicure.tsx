import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { proceduresThunk, selectManicureData } from "../slice/Procedures.slice";
import { AppDispatch, useAppSelector } from "../store";
import { ProcedureCardExtended } from "../components/procedureCardExtended";

export const Manicure = () => {
  const dispatch = useDispatch<AppDispatch>();
  const manicureProceduresData = useAppSelector(
    selectManicureData.manicureProceduresData
  );
  useEffect(() => {
    dispatch(proceduresThunk.manicure());
  }, []);
  console.log("cosmeticsProceduresData", manicureProceduresData);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
          Manicure Procedures
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our cosmetic services and our manicurist
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(manicureProceduresData) &&
          manicureProceduresData.length > 0 ? (
            manicureProceduresData.map((procedure) => (
              <ProcedureCardExtended
                key={procedure.id}
                procedure={procedure.procedure}
                averageTime={procedure.averageTime}
                coveringHealingTime={procedure.coveringHealingTime}
                specialInstructionsBefore={procedure.specialInstructionsBefore}
                specialInstructionsAfter={procedure.specialInstructionsAfter}
                price={procedure.price}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Meet Our Manicurist
          </h1>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Our Manicurist
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis massa sed dolor rhoncus, at ultricies magna posuere.
              Integer ut ligula eget mi dictum ultricies.
            </p>
            <p className="text-gray-600 mb-4">
              Our manicurist is highly trained and certified, ensuring the
              highest standards of professionalism and expertise in cosmetic
              procedures.
            </p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis massa sed dolor rhoncus, at ultricies magna posuere.
              Integer ut ligula eget mi dictum ultricies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
