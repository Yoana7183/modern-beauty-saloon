import { Link } from "react-router-dom";
interface ServiceCardProps {
  title: string;
  description: string;
}

export const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to Our Beauty Salon
          </h1>
          <p className="text-lg text-gray-600">
            Discover a world of beauty and relaxation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Cosmetics"
            description="Enhance your natural beauty with our professional cosmetics services."
          />
          <ServiceCard
            title="Manicure"
            description="Treat yourself to a luxurious manicure experience, from classic to gel nails."
          />
          <ServiceCard
            title="Hair Styling"
            description="Transform your look with our expert hair styling services, from cuts to colors."
          />
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/procedures"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
