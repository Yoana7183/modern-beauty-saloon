import { ServiceCardProps } from "../types/general.types";

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  