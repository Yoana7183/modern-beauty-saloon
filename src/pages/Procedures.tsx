export const Procedures = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Cosmetic Procedures
      </h1>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hair</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcedureCard
          procedure="Haircut"
          averageTime="30-45 minutes"
          coveringHealingTime="None"
          specialInstructionsBefore="Come with clean, dry hair."
          specialInstructionsAfter="Style as desired and use recommended hair care products."
          price="$50"
        />

        <ProcedureCard
          procedure="Hair Color"
          averageTime="2-3 hours"
          coveringHealingTime="None"
          specialInstructionsBefore="Avoid washing hair for 48 hours before the appointment."
          specialInstructionsAfter="Use color-safe shampoo and conditioner to maintain color vibrancy."
          price="$120"
        />

        <ProcedureCard
          procedure="Hair Extensions"
          averageTime="2-4 hours"
          coveringHealingTime="None"
          specialInstructionsBefore="Arrive with clean, dry hair and avoid using heavy styling products."
          specialInstructionsAfter="Follow specific care instructions provided by your stylist."
          price="Starting from $200"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Cosmetics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcedureCard
          procedure="Facial Treatment"
          averageTime="60 minutes"
          coveringHealingTime="None"
          specialInstructionsBefore="Avoid using makeup on the day of the procedure."
          specialInstructionsAfter="Use gentle skincare products and avoid direct sunlight."
          price="$100"
        />

        <ProcedureCard
          procedure="Microdermabrasion"
          averageTime="45 minutes"
          coveringHealingTime="Minimal, typically a few hours"
          specialInstructionsBefore="Avoid excessive sun exposure for one week before the procedure."
          specialInstructionsAfter="Apply moisturizer regularly and avoid harsh skincare products."
          price="$80"
        />

        <ProcedureCard
          procedure="Chemical Peel"
          averageTime="30-60 minutes"
          coveringHealingTime="Peeling may last for several days"
          specialInstructionsBefore="Discontinue use of retinol and exfoliating products for one week before the procedure."
          specialInstructionsAfter="Keep skin hydrated and protected from the sun."
          price="$120"
        />
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        Manicure
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ProcedureCard
          procedure="Classic Manicure"
          averageTime="30-45 minutes"
          coveringHealingTime="None"
          specialInstructionsBefore="Remove old nail polish before arriving."
          specialInstructionsAfter="Avoid using nails as tools and moisturize hands regularly."
          price="$25"
        />

        <ProcedureCard
          procedure="Gel Manicure"
          averageTime="45-60 minutes"
          coveringHealingTime="Instantly dry"
          specialInstructionsBefore="Come with clean nails."
          specialInstructionsAfter="Avoid harsh chemicals and moisturize cuticles regularly."
          price="$35"
        />

        <ProcedureCard
          procedure="Acrylic Nails"
          averageTime="60-90 minutes"
          coveringHealingTime="Instantly dry"
          specialInstructionsBefore="Arrive with clean nails."
          specialInstructionsAfter="Avoid using nails as tools and moisturize hands regularly."
          price="$45"
        />
      </div>
    </div>
  );
};
interface ProcedureCardProps {
  procedure: string;
  averageTime: string;
  coveringHealingTime: string;
  specialInstructionsBefore: string;
  specialInstructionsAfter: string;
  price: string;
}
const ProcedureCard = ({
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
      <div>
        <strong>Average Time:</strong> {averageTime}
      </div>
      <div>
        <strong>Covering/Healing Time:</strong> {coveringHealingTime}
      </div>
      <div>
        <strong>Special Instructions Before:</strong>{" "}
        {specialInstructionsBefore}
      </div>
      <div>
        <strong>Special Instructions After:</strong> {specialInstructionsAfter}
      </div>
      <div>
        <strong>Price:</strong> {price}
      </div>
    </div>
  );
};
