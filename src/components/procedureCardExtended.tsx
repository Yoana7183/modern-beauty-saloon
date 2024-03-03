import React from 'react';
interface ProcedureCardProps {
  procedure: string;
  averageTime: string;
  coveringHealingTime: string;
  specialInstructionsBefore: string;
  specialInstructionsAfter: string;
  price: string;
}
export const ProcedureCardExtended = ({
  procedure,
  averageTime,
  coveringHealingTime,
  specialInstructionsBefore,
  specialInstructionsAfter,
  price,
}: ProcedureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{procedure}</h3>
    <div className="mb-2">
      <strong>Average Time:</strong> {averageTime}
    </div>
    <div className="mb-2">
      <strong>Covering/Healing Time:</strong> {coveringHealingTime}
    </div>
    <div className="mb-2">
      <strong>Special Instructions Before:</strong>{" "}
      {specialInstructionsBefore}
    </div>
    <div className="mb-2">
      <strong>Special Instructions After:</strong> {specialInstructionsAfter}
    </div>
    <div className="mb-2">
      <strong>Price:</strong> {price}
    </div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Make an appointment
    </button>
  </div>
  
  );
};
