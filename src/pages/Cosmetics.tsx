import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { proceduresThunk, selectManicureData } from "../slice/Procedures.slice";
import { AppDispatch, useAppSelector } from "../store";
import ProcedureList from "../components/procedureList";

export const Cosmetics = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cosmeticsProceduresData = useAppSelector(
    selectManicureData.cosmeticsProceduresData
  );
  useEffect(() => {
    dispatch(proceduresThunk.cosmetics());
  }, []);
  console.log("cosmeticsProceduresData", cosmeticsProceduresData);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Hair Style Procedures
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our cosmetic services and our hair stylist
          </p>
        </div>
        <div className="w-2 gap-8">
          {cosmeticsProceduresData ? (
            <ProcedureList
              data={cosmeticsProceduresData}
              category={cosmeticsProceduresData.category}
            />
          ) : (
            <p>No cosmetics data available</p>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Our Cosmetician
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis massa sed dolor rhoncus, at ultricies magna posuere. Integer
            ut ligula eget mi dictum ultricies.
          </p>
          <p className="text-gray-600 mb-4">
            Our cosmetician is highly trained and certified, ensuring the
            highest standards of professionalism and expertise in cosmetic
            procedures.
          </p>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis massa sed dolor rhoncus, at ultricies magna posuere. Integer
            ut ligula eget mi dictum ultricies.
          </p>
        </div>
      </div>
    </div>
  );
};
