interface ProcedureCardProps {
  title: string;
  description: string;
}

const ProcedureCard = ({ title, description }: ProcedureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export const Cosmetics = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Cosmetic Procedures
          </h1>
          <p className="text-lg text-gray-600">
            Learn more about our cosmetic services and our cosmetician
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProcedureCard
            title="Facial Treatment"
            description="Revitalize your skin with our personalized facial treatments tailored to your skin type."
          />
          <ProcedureCard
            title="Microdermabrasion"
            description="Achieve smoother, younger-looking skin with our microdermabrasion treatment."
          />
          <ProcedureCard
            title="Chemical Peel"
            description="Reduce signs of aging and improve skin texture with our chemical peel procedure."
          />
          {/* Add more procedure cards as needed */}
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
